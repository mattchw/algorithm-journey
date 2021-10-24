# 2. Longest Substring Without Repeating Characters

https://leetcode.com/problems/longest-substring-without-repeating-characters/

Level: Medium

## Solution

### Hash Map + Sliding Window
- use a hash map to save the position of characters and their positions
- keep moving to the right if there are no repeating characters
- If there is a repeated character, move the left boundary (start) to the right

**_Complexity Anlysis_**

- _Time Complexity_: O(n)
- _Space Complexity_：O(n)
