/**
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
 */

var trap = function (height) {
  let left = 0, right = height.length - 1;
  let leftMax = 0, rightMax = 0;
  let res = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        res += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        res += rightMax - height[right];
      }
      right--;
    }
  }

  return res;
};