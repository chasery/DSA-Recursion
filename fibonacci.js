/* Fibonacci

Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

What is the input to the program?
  A number to get the fibonacci position.
What is the output of the program?
  The array containing the fibonacci sequence to the provided position.
What is the input to each recursive call?
  The number minus one.
What is the output of each recursive call?
  The addition of the previous two positions.
    
*/

const fibonacci = (num) => {
  if (num <= 2) {
    return [1, 1].slice(0, num);
  }
  const result = fibonacci(num - 1);

  result.push(result[result.length - 1] + result[result.length - 2]);
  return result;
};

console.log(fibonacci(4));

/* Result:
  [1, 1, 2, 3, 5, 8, 13]
*/
