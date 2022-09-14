function pyramid(n) {
  const mid = Math.floor((2 * n - 1) / 2);
  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < 2 * n - 1; j++) {
      if (mid - i <= j && mid + i >= j) {
        str += '#';
      } else {
        str += ' ';
      }
    }
    console.log(str);
  }
}