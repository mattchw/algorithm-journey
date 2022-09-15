"""
Write a function that accepts an integer N and returns a NxN spiral matrix.

Examples:

matrix(2);
     [[undefined, undefined],
      [undefined, undefined]]

matrix(3);
     [[1, 2, 3],
      [8, 9, 4],
      [7, 6, 5]]

matrix(4);
     [[1,   2,  3, 4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10,  9,  8, 7]]
"""


def matrix(n):
    res = [[None] * n for _ in range(n)]
    i, j, di, dj = 0, 0, 0, 1
    for k in range(n * n):
        res[i][j] = k + 1
        if res[(i + di) % n][(j + dj) % n] is not None:
            di, dj = dj, -di
        i += di
        j += dj
    return res
