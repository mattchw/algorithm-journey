/**
 * input:
 * 6
 * Hello
 * Hello World
 * Hello My World
 * Hello is my world
 * Hello is my little world
 * Hello this is my little world
 * 
 * output:
 * Hello
 * Hello World
 * Hello My World
 * Hello my is world
 * Hello little my is world
 * Hello little my is this world
 */

function reverseStringExceptFirstAndLast(input) {
  let inputs = input.split('\n');

  // remove the first line
  inputs.shift();

  for (let i = 0; i < inputs.length; i++) {
    let words = inputs[i].trim().split(' ');
    console.log(words)
    if (words.length > 3) {
      let firstWord = words[0];
      let lastWord = words[words.length - 1];
      let middleWords = words.slice(1, words.length - 1);
      middleWords.reverse();
      inputs[i] = `${firstWord} ${middleWords.join(' ')} ${lastWord}`;
      console.log(inputs[i])
    } else {
      console.log(inputs[i])
    }
  }
}

let input = `6
Hello       
Hello World
Hello My World
Hello is my world
Hello is my little world
Hello this is my little world`;

reverseStringExceptFirstAndLast(input);