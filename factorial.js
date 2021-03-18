/* Factorial

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
