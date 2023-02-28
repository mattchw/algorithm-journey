/**
 * Write a function that accepts a square matrix (N x N 2D array) and returns the determinant of the matrix.
 */

function determinant(m) {
  if (m.length === 1) {
    return m[0][0];
  }
  if (m.length === 2) {
    return m[0][0] * m[1][1] - m[0][1] * m[1][0];
  }
  let sum = 0;
  let sign = 1;
  for (let i = 0; i < m.length; i++) {
    sum += sign * m[0][i] * determinant(subMatrix(m, 0, i));
    sign *= -1;
  }
  return sum;
}

function subMatrix(m, row, col) {
  let sub = [];
  for (let i = 0; i < m.length; i++) {
    if (i !== row) {
      sub.push([]);
      for (let j = 0; j < m.length; j++) {
        if (j !== col) {
          sub[sub.length - 1].push(m[i][j]);
        }
      }
    }
  }
  return sub;
}