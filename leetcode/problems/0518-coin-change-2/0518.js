/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  const combinations = new Array(coins.length + 1).fill(0).map(() => new Array(amount + 1).fill(0));
  for (let i = 0; i <= amount; i++) {
      combinations[0][i] = 0;
  }
  for (let i = 0; i <= coins.length; i++) {
      combinations[i][0] = 1;
  }
  for (let i = 1; i <= coins.length; i++) {
      for (let j = 1; j <= amount; j++) {
          if (coins[i - 1] <= j) {
              combinations[i][j] = combinations[i - 1][j] + combinations[i][j - coins[i - 1]];
          } else {
              combinations[i][j] = combinations[i - 1][j];
          }
      }
  }
  return combinations[coins.length][amount];
};