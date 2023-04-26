/**
 * You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the expression.

Note that:

The valid operators are '+', '-', '*', and '/'.
Each operand may be an integer or another expression.
The division between two integers always truncates toward zero.
There will not be any division by zero.
The input represents a valid arithmetic expression in a reverse polish notation.
The answer and all the intermediate calculations can be represented in a 32-bit integer.
 */

var evalRPN = function (tokens) {
  const stack = [];
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token === '+' || token === '-' || token === '*' || token === '/') {
      const num2 = stack.pop();
      const num1 = stack.pop();
      if (token === '+') {
        stack.push(num1 + num2);
      } else if (token === '-') {
        stack.push(num1 - num2);
      } else if (token === '*') {
        stack.push(num1 * num2);
      } else {
        stack.push(Math.trunc(num1 / num2));
      }
    } else {
      stack.push(Number(token));
    }
  }
  return stack.pop();
};