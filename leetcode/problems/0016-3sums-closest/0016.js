/**
 * Runtime: 84 ms
 * Memory Usage: 40.5 MB
 */
 var threeSumClosest = function(nums, target) {
  let len = nums.length;
  let res = 0;
  let diff = Infinity;
  if (len > 2) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < len-2; i++) {
      if (i > 0 && nums[i] == nums[i-1]) {
        continue;
      }
      let j = i + 1;
      let k = len - 1;
      while (j < k) {
        let sum = nums[i] + nums[j] + nums[k];
        if (Math.abs(sum-target) < diff) {
          res = sum;
          diff = Math.abs(sum - target);
        }
        if (sum == target) {
          return res;
        } else if (sum > target) {
          k--;
        } else {
          j++;
        }
      }
    }
  }
  return res;
};