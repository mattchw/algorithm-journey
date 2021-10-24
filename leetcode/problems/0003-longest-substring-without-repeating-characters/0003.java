import java.util.HashMap;

/**
 * Runtime: 4 ms
 * Memory Usage: 38.6 MB
 */
class Solution {
  public int lengthOfLongestSubstring(String s) {
      int ans = 0;
      int start = 0;
      
      HashMap<Character, Integer> map = new HashMap<>();
      
      for (int i = 0; i < s.length(); i++) {
          char c = s.charAt(i);
          
          if (map.containsKey(c)) {
              start = Math.max(start, map.get(c) + 1);
          }
          ans = Math.max(ans, i - start + 1);
          map.put(c, i);
      }
      return ans;
  }
}