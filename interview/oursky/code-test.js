/**
 * Q1:
 * Write a function that takes two arrays as input, each array contains a list of A-Z;
 * Your program should return True if the 2nd array is a subset of 1st array, or False if not.
 * 
 * For example:
 * isSubset([A,B,C,D,E], [A,E,D]) = true
 * isSubset([A,B,C,D,E], [A,D,Z]) = false
 * isSubset([A,D,E], [A,A,D,E]) = true
 */
// time complexity: O(n^2)
function question1(arr1, arr2) {
  let result = true;
  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      result = false;
    }
  }
  return result;
}

// use Set version
// time complexity: O(n)
function question1Set(arr1, arr2) {
  let result = true;
  let set = new Set(arr1);
  for (let i = 0; i < arr2.length; i++) {
    if (!set.has(arr2[i])) {
      result = false;
    }
  }
  return result;
}

/**
 * Q2:
 * Design and implement a data structure for cache.
 * get(key)
 * Get the value of the key if the key exists in the cache, otherwise return -1.
 * 
 * put(key, value, weight)
 * Set or insert the value, when the cache reaches its capacity,
 * it should invalidate the least recently used item before inserting a new item.
 * 
 * when current_time != last_access_time: weight / ln(current_time - last_access_time + 1)
 * else: weight / -100
 * Your data structure should be optimized for the computational complexity of get(key) i.e. Average case for computational complexity of get(key) could be O(1).
 * In your code, you can assume common data structure such as array, different type of list, hash table are available. Please explain the computational complexity of get(key) and put(...) in Big-O notation.
 */
class Cache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = {};
  }

  get(key) {
    const current_time = new Date().getTime();
    if (this.cache[key]) {
      this.cache[key].last_access_time = current_time;
      return this.cache[key].value;
    }
    return -1;
  }

  put(key, value, weight) {
    const current_time = new Date().getTime();
    if (this.cache[key]) {
      this.cache[key].value = value;
      this.cache[key].weight = weight / Math.log(current_time - this.cache[key].last_access_time + 1);
      this.cache[key].last_access_time = current_time;
    } else {
      this.cache[key] = {
        value: value,
        weight: weight / -100,
        last_access_time: current_time
      };
    }
    this.cleanUp();
  }

  cleanUp() {
    let keys = Object.keys(this.cache);
    if (keys.length > this.capacity) {
      let sorted = keys.sort((a, b) => this.cache[a].weight - this.cache[b].weight);
      delete this.cache[sorted[0]];
    }
  }
}

/**
 * Q3:
 * Please understand the following program:
 * function recur(n, cur) {
 *  if (!cur) {
 *   cur = 0;
 *  }
 *  if (n < 2) {
 *   throw new Error('Invalid Input');
 *  }
 *  if (n == 2) {
 *   return 1 / n + cur;
 *  }
 *  return recur(n - 1, cur + 1 / (n * (n - 1)));
 * }
 * To prevent an infinite loop in a production system.
 * Write a program doing the same calculation without recursion.
 * Please note that a while loop is also not good in a production system.
 */
function recur(n, cur) {
  if (!cur) {
    cur = 0;
  }
  if (n < 2) {
    throw new Error('Invalid Input');
  }
  if (n == 2) {
    return 1 / n + cur;
  }
  return recur(n - 1, cur + 1 / (n * (n - 1)));
}

// improved version
function question3(n, cur) {
  if (n < 2) {
    throw new Error('Invalid Input');
  }
  for (let i = n; i > 2; i--) {
    cur += 1 / (i * (i - 1));
  }
  return 1 / n + cur;
}