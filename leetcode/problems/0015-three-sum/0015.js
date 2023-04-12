var threeSum = function (nums) {
  if (!Array.isArray(nums) || nums.length < 2) return [];

  let i = 0;
  let len = nums.length;
  const output = [];

  nums.sort((a, b) => a - b);

  while (i < len - 2) {
    let j = i + 1;
    let k = len - 1;

    if (i > 0 && nums[i] === nums[i - 1]) {
      i++;
      continue;
    }

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum > 0) {
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        output.push([nums[i], nums[j], nums[k]]);
        j++;
        while (nums[j] === nums[j - 1]) {
          j++;
        }
      }
    }
    i++;
  }

  return output;
};