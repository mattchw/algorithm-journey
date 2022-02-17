/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = {};
  for (const str of strs) {
    let letters = str.split('').sort().join('');
    if (map[letters] === undefined) {
      map[letters] = [str];
    }
    else {
      map[letters].push(str);
    }

  }
  return Object.values(map);
};