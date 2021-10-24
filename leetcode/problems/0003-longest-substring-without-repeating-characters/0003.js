/**
 * Runtime: 140 ms
 * Memory Usage: 44.5 MB
 */
 var lengthOfLongestSubstring = function(s) {
  let ans = 0, start = 0;
  
  const map = {};

  for(let i = 0; i < s.length; i++)
  {
      let c = s[i];
      if(map[c] !== undefined){
          start = Math.max(start, map[c] + 1);
      }
      ans = Math.max(ans, i-start+1);
      
      map[c] = i;
  }

  return ans;
};