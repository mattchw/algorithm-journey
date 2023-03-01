/**
 * Factorial of big numbers
 */
function factorial(n) {
  let result = [1];
  for (let i = 2; i <= n; i++) {
    result = multiply(result, i);
  }
  return result.join('');
}

function multiply(a, b) {
  let result = [];
  let carry = 0;
  for (let i = a.length - 1; i >= 0; i--) {
    let tmp = a[i] * b + carry;
    if (tmp >= 10) {
      carry = Math.floor(tmp / 10);
      tmp = tmp % 10;
    } else {
      carry = 0;
    }
    result.unshift(tmp);
  }
  if (carry > 0) {
    result.unshift(carry);
  }
  return result;
}