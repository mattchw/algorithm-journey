/**
 * Factorial of big numbers
 */
function factorial(n) {
  let result = [1];
  for (let i = 2; i <= n; i++) {
    let tmp = 0;
    for (let j = 0; j < result.length || tmp > 0; j++) {
      let product = (result[j] || 0) * i + tmp;
      result[j] = product % 10;
      tmp = Math.floor(product / 10);
    }
  }
  return result.reverse().join('');
}