/**
 * Q1
 * Given that there is an array contains number from 1 to 100,
 * when hte number is multiple of 3, print "bug"
 * when the number is multiple of 5, print "fix"
 * when the number is multiple of 3 and 5, print "bugfix"
 */
function printBugFix() {
  for (let i = 1; i <=100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("bugfix");
    }
    else if (i % 3 === 0) {
      console.log("bug");
    }
    else if (i % 5 === 0) {
      console.log("fix");
    }
  }
}

/**
 * Q2
 * Given two arrays [1,2,3,4,5] and [2,3,1,0,5]
 * find which number(s) is/are not present in the second array
 */
function findMissingNumber(arr1, arr2) {
  return arr1.filter(num => !arr2.includes(num));
}

/**
 * Q3
 * Given two arrays [1,2,3,4,5] and [2,3,1,0,5]
 * find which number(s) is/are common in both arrays
 */
function findCommonNumber(arr1, arr2) {
  return arr1.filter(num => arr2.includes(num));
}

/**
 * Q4
 * Given two arrays [1,2,3,4,5] and [2,3,1,0,5]
 * merge these two arrays and unique to display
 */
function mergeArray(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

/**
 * Q5
 * How do you find the closest integer 17 in [30, 1, 5, 16, 19, 21, 2, 55]
 */
function findClosestNumber(arr, num) {
  let closest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (Math.abs(num - arr[i]) < Math.abs(num - closest)) {
      closest = arr[i];
    }
  }
  return closest;
}
