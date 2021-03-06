/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
    let dp = Array(amount + 1).fill(amount + 1);
    dp[0] = 0;
    
    for (const coin of coins) {
        for (let i = 0; i < dp.length; i++) {
            if (i >= coin) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    
    return dp[amount] > amount ? -1 : dp[amount];
};