/* Reverse string

Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

What is the input to the program?
  A string.
What is the output of the program?
  The reversed string.
What is the input to each recursive call?
  A string of characters excluding the first one.
What is the output of each recursive call?
  The recursive call for the string minus the first character of the string and then the first character.
*/

const reverseString = (string) => {
  if (string === '') {
    return '';
  } else {
    return reverseString(string.substr(1)) + string.charAt(0);
  }
};

console.log(reverseString('Hello, world!'));

/* Result:
  !dlrow ,olleH
*/
