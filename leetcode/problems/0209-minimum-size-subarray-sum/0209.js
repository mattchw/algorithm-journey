/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let start = 0;
    let end = 0;
    let ans = Infinity;
    let total = 0;
    while (start < nums.length) {
        while (end < nums.length && total < target) {
            total += nums[end];
            end++;
        }
        if (total < target) break;
        ans = Math.min(ans, end - start);
        total -= nums[start];
        start++;
    }
    return ans === Infinity ? 0 : ans;
};