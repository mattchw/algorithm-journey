/**
 * Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.
 */
var dailyTemperatures = function (T) {
  const stack = []; // [temparature, index]
  const res = new Array(T.length).fill(0);

  for (let i = 0; i < T.length; i++) {
    while (stack.length && T[i] > stack[stack.length - 1][0]) {
      const [_, index] = stack.pop();
      res[index] = i - index;
    }
    stack.push([T[i], i]);
  }

  return res;
}