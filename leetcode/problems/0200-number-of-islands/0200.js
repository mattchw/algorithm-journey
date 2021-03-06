/**
 * @param {character[][]} grid
 * @return {number}
 * 
 * Runtime: 85 ms
 * Memory Usage: 44.7 MB
 */
var numIslands = function (grid) {
  function dfs(i, j) {
    if (
      i >= 0 &&
      j >= 0 &&
      i < grid.length &&
      j < grid[i].length &&
      grid[i][j] === '1'
    ) {
      grid[i][j] = '0';
      dfs(i + 1, j);
      dfs(i, j + 1);
      dfs(i - 1, j);
      dfs(i, j - 1);
    }
  }

  let counter = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        counter++;
        dfs(i, j);
      }
    }
  }

  return counter;
};