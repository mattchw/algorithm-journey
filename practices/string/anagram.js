/**
 * Check to see if two provided strings are anagrams of each other. One string is an anagram of another if it uses the same characters in the same quantity.
 * 
 * Only consider characters, not spaces or punctuation
 * 
 * Consider capital letters to be the same as lower case
 * 
 * Examples:
 * 
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 */

// using sort()
function anagrams(stringA, stringB) {
  const strA = stringA.toLowerCase().replace(/[^\w]/g, '').split('').sort().join('');
  const strB = stringB.toLowerCase().replace(/[^\w]/g, '').split('').sort().join('');
  return strA === strB;
}
