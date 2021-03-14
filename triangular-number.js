/* Triangular number

What is the input to the program?
  An integer.
What is the output of the program?
  The number of dots to create an equilateral triangle.
What is the input to each recursive call?
  The number minus one.
What is the output of each recursive call?
  The number of dots that row needs.
  
*/

const triangularNumber = (num) => {
  // Base case
  if (num <= 1) {
    return 1;
  }
  // General case
  return num + triangularNumber(num - 1);
};

console.log(triangularNumber(9));

/* Result:
  45
*/
