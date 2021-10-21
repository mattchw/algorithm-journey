# 1. Two Sum

https://leetcode.com/problems/two-sum/

## Solution 1

### Brute Force
- use two for-loops to traverse every element, and find the target numbers that meet the requirement

```javascript
for (int i = 0; i < n; i++) {
  for (int j = 0; j < i; j ++){
    if (nums[i] + nums[j] == target) {
      return [j, i]
    }
  }
}
```

**_Complexity Anlysis_**

- _Time Complexity_: O(n^2)
- _Space Complexity_：O(1)

## Solution 2
### Map
- Find the difference instead of the sum
- Connect every number with its index through the help of Map
- Less time by more space

**_Complexity Anlysis_**

- _Time Complexity_: O(n)
- _Space Complexity_：O(n)