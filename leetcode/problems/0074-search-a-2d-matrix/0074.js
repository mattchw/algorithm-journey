var searchMatrix = function (matrix, target) {
  if (matrix.length === 0) {
    return false;
  }
  let l = 0;
  let r = matrix.length - 1;

  while (l <= r) {
    let mid = Math.floor(r - l / 2);

    if (matrix[mid][0] === target) {
      return true;
    }
    if (matrix[mid][0] > target) {
      r = mid - 1;
    }
    if (matrix[mid][0] < target) {
      l = mid + 1;
    }
  }

  if (r < 0) {
    return false;
  }

  let row = r;
  l = 0;
  r = matrix[row].length - 1;

  while (l <= r) {
    let mid = Math.floor(r - l / 2);

    if (matrix[row][mid] === target) {
      return true;
    }
    if (matrix[row][mid] > target) {
      r = mid - 1;
    }
    if (matrix[row][mid] < target) {
      l = mid + 1;
    }
  }

  return false;
};