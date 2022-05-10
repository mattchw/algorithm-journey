/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const result = [];
  const path = [];
  const candidatesSet = new Set(candidates);
  const candidatesLength = candidates.length;
  const candidatesArr = candidates.sort((a, b) => a - b);

  function dfs(index, sum) {
    if (sum === target) {
      result.push(path.slice());
      return;
    }

    if (sum > target) {
      return;
    }

    for (let i = index; i < candidatesLength; i++) {
      if (candidatesSet.has(candidatesArr[i])) {
        path.push(candidatesArr[i]);
        dfs(i, sum + candidatesArr[i]);
        path.pop();
      }
    }
  }

  dfs(0, 0);

  return result;
};