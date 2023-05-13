/**
 * Given a string s, return true if the s can be palindrome after deleting at most one character from it.
 */

var validPalindrome = function (s) {
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    if (s[i] !== s[j]) {
      return isPalindrome(s, i + 1, j) || isPalindrome(s, i, j - 1);
    }

    i++;
    j--;
  }

  return true;
}

function isPalindrome(s, i, j) {
  while (i < j) {
    if (s[i] !== s[j]) {
      return false;
    }

    i++;
    j--;
  }

  return true;
}