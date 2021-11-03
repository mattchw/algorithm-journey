/**
 * Runtime: 88 ms
 * Memory Usage: 48.2 MB
 */
 var maxArea = function(height) {
  let max = 0;
  let start = 0;
  let end = height.length - 1;
  
  while (start < end) {
    let w = end - start;
    let h = 0;
    if (height[start] < height[end]) {
      h = height[start];
      start++;
    } else {
      h = height[end];
      end--;
    }
      
    let tmp = w * h;
    if (tmp > max) {
      max = tmp;
    }
  }
  
  return max;
};