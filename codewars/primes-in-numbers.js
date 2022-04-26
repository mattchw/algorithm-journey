/**
 * Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :
 * "(p1**n1)(p2**n2)...(pk**nk)"
 * with the p(i) in increasing order and n(i) empty if n(i) is 1.
 * 
 * Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
 */
 function primeFactors(n){
  //your code here
  let result = '';
  let prime = 2;
  while (n>1) {
    let count = 0;
    while (n % prime === 0) {
      count ++;
      n /= prime;
    }
    if (count > 0) {
      if (count === 1) {
        result += `(${prime})`;
      } else {
        result += `(${prime}**${count})`;
      }
    }
    prime++;
  }
  return result;
}