/**
 * @param {string} s
 * @return {number}
 * 
 * Solution 1
 * Runtime: 92 ms
 * Memory Usage: 44.8 MB
 */
var firstUniqChar = function(s) {
    if (s.length === 0) return -1;
    for (let i = 0; i < s.length; i++) {
        const letter = s[i];
        if (s.indexOf(letter) === s.lastIndexOf(letter)) {
            return i;
        }
    }
    return -1;    
};

/**
 * @param {string} s
 * @return {number}
 * 
 * Solution 2
 * Runtime: 169 ms
 * Memory Usage: 44.6 MB
 */
var firstUniqChar = function(s) {
    const map = {};
    
    for (const letter of s) {
        if (map[letter] !== undefined) {
            map[letter] = map[letter]++;
        } else {
            map[letter] = 1;
        }
    }

    for(let i = 0; i < s.length; i++) {
        const letter = s[i]
    
        if (map[letter] === 1) {
            return i;
        }
    }
    
    return -1
};