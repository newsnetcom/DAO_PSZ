function calculateRisk() {
    // Get user input
    let accountBalance = parseFloat(document.getElementById('accountBalance').value);
    let riskPercentage = parseFloat(document.getElementById('riskPercentage').value);
    let currentPrice = parseFloat(document.getElementById('currentPrice').value);
    let stopLossPrice = parseFloat(document.getElementById('stopLossPrice').value);
    let takeProfitPrice = parseFloat(document.getElementById('takeProfitPrice').value);

    // Validate inputs
    if (isNaN(accountBalance) || isNaN(riskPercentage) || isNaN(currentPrice) || isNaN(stopLossPrice) || isNaN(takeProfitPrice)) {
        alert("Please fill in all fields correctly.");
        return;
    }

    // Calculate risk per trade in dollars
    let riskAmount = (riskPercentage / 10000) * accountBalance;

    // Calculate stop loss in pips
    let stopLoss = Math.abs(currentPrice - stopLossPrice);

    // Define pip value for Gold (0.01 per lot)
    let pipValue = 0.01;  

    // Calculate lot size
    let lotSize = riskAmount / (stopLoss * pipValue);

    // Calculate Reward-to-Risk Ratio
    let takeProfit = Math.abs(takeProfitPrice - currentPrice);
    let rewardRiskRatio = takeProfit / stopLoss;

    // Display results
    document.getElementById('lotSize').innerHTML = `Recommended Lot Size: <strong>${lotSize.toFixed(2)}</strong>`;
    document.getElementById('rewardRiskRatio').innerHTML = `Reward-to-Risk Ratio: <strong>${rewardRiskRatio.toFixed(2)}</strong>`;
}
