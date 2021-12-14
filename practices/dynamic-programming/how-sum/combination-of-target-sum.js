/**
 * Given a target sum and an array of numbers as arguments, calculate the combination of elements that add up exactly the target sum.
 * @param {*} targetSum 
 * @param {*} numbers 
 */
const howSum = (targetSum, numbers) => {
  // using dynamic programming
  // create a 2D array
  const combinations = new Array(numbers.length + 1).fill(0).map(() => new Array(targetSum + 1).fill(0));
  // initialize the first row
  for (let i = 0; i <= targetSum; i++) {
    combinations[0][i] = 0;
  }
  // initialize the first column
  for (let i = 0; i <= numbers.length; i++) {
    combinations[i][0] = 1;
  }
  // fill the rest of the array
  for (let i = 1; i <= numbers.length; i++) {
    for (let j = 1; j <= targetSum; j++) {
      if (numbers[i - 1] <= j) {
        combinations[i][j] = combinations[i - 1][j] + combinations[i][j - numbers[i - 1]];
      } else {
        combinations[i][j] = combinations[i - 1][j];
      }
    }
  }
  return combinations[numbers.length][targetSum];
}