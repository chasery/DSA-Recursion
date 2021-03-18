/* Factorial
Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by multiplying that number by each number between itself and 1. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

What is the input to the program?
  A number.
What is the output of the program?
  The factorial of the provided number.
What is the input to each recursive call?
  The number - 1.
What is the output of each recursive call?
  The number multiplied by the previous number.
*/

const factorial = (num) => {
  // Base case
  if (num === 1) {
    // Will be the multiplication of 1.
    return num;
  } else {
    // General case
    // Multiply the number by the number - 1.
    return num * factorial(num - 1);
  }
};

console.log(factorial(5));

/* Result:
  120
*/
