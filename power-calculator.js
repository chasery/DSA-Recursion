/* Power calculator

Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)

powerCalculator(10,2) should return 100
powerCalculator(10,-2) should return exponent should be >= 0

What is the input to the program?
  An integer and an integer >= 0 as the power.
What is the output of the program?
  A value of the base raised to the power of the exponent assuming a positive number is provided. 
What is the input to each recursive call?
  The base number and the power -1.
What is the output of each recursive call?
  The base number multiplied by the base number.
*/

const powerCalculator = (base, exponent) => {
  if (exponent >= 0) {
    // Base case
    if (exponent === 0) {
      return 1;
    }
    // General case
    return base * powerCalculator(base, exponent - 1);
  }
  return 'exponent should be >= 0';
};

console.log(powerCalculator(10, 4));

/* Result:
  10000
*/
