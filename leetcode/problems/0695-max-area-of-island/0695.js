/**
 * @param {number[][]} grid
 * @return {number}
 * 
 * Runtime: 107 ms
 * Memory Usage: 44.4 MB
 */
var maxAreaOfIsland = function(grid) {
  function dfs(i, j) {
    if (
      i >= 0 &&
      j >= 0 &&
      i < grid.length &&
      j < grid[i].length &&
      grid[i][j] === 1
    ) {
      grid[i][j] = 0;
      return 1 + dfs(i-1, j) + dfs(i, j-1) + dfs(i+1, j) + dfs(i, j+1)
    }
    return 0;
  }
  let res = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        res = Math.max(res, dfs(i, j));
      }
    }
  }

  return res;
};