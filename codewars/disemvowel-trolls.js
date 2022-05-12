/**
 * Trolls are attacking your comment section!
 * 
 * A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
 * 
 * Your task is to write a function that takes a string and return a new string with all vowels removed.
 * 
 * For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
 * 
 * Note: for this kata y isn't considered a vowel.
 */

function disemvowel(str) {
  const vowels = 'aeiouAEIOU';
  const result = [];
  const strArr = str.split('');

  for (let i = 0; i < strArr.length; i++) {
    const char = strArr[i];
    if (!vowels.includes(char)) {
      result.push(char);
    }
  }
  return result.join('');
}