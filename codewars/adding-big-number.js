function add(a, b) {
  let sum = '';
  let carry = 0;
  let aPointer = a.length - 1;
  let bPointer = b.length - 1;
  while (aPointer >= 0 || bPointer >= 0) {
    let aDigit = 0;
    let bDigit = 0;
    if (a[aPointer]) {
      aDigit = parseInt(a[aPointer]);
    }
    if (b[bPointer]) {
      bDigit = parseInt(b[bPointer]);
    }
    let tmp = aDigit + bDigit + carry;

    if (tmp >= 10) {
      tmp = tmp % 10;
      carry = 1;
    } else {
      carry = 0;
    }

    sum = tmp + sum;
    aPointer--;
    bPointer--;
  }
  if (carry > 0) {
    sum = carry + sum;
  }
  return sum;
}