# 4. Longest Substring Without Repeating Characters

https://leetcode.com/problems/median-of-two-sorted-arrays/

Level: Hard

### Brute Force
- use merge sort to merge the two arrays into a new array and find the median

```javascript
// merge sort
const merged = [];
let i = 0;
let j = 0;
while (i < nums1.length && j < nums2.length) {
  if (nums1[i] < nums2[j]) {
    merged.push(nums1[i++]);
  } else {
  merged.push(nums2[j++]);
  }
}
// push the rest of numbers in nums1 into merged array
while (i < nums1.length) {
  merged.push(nums1[i++]);
}
// push the rest of numbers in nums2 into merged array
while (j < nums2.length) {
  merged.push(nums2[j++]);
}

const { length } = merged;
return length % 2 === 1
  ? merged[Math.floor(length / 2)]
  : (merged[length / 2] + merged[length / 2 - 1]) / 2;
```

**_Complexity Anlysis_**

- _Time Complexity_: O(m+n)
- _Space Complexity_：O(m+n)

## Solution 2
### Bineary Search
- As the two arrays are sorted, using bineary search can reduce the time complexity
- use bineary search to define the index of nums1 (i)
- As (i+1) + (j+1) = (length of nums1 + length of nums2 + 1) / 2, we also know the index of nums2 (j)

**_Complexity Anlysis_**

- _Time Complexity_: O(log(m+n))
- _Space Complexity_：O(max(m, n))
