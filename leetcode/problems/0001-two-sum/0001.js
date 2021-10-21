/**
 * Without using new Map()
 * 
 * Runtime: 90 ms
 * Memory Usage: 39.8 MB
 */
 var twoSum = function(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];
      if (map[diff] !== undefined) {
        return [map[diff], i];
      }
      map[nums[i]] = i;
  }
};

/**
 * Using new Map()
 * 
 * Runtime: 74 ms
 * Memory Usage: 40.4 MB
 */
 var twoSum = function(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(nums[i], i);
  }
};