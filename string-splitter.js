/* String splitter

Write a recursive function that splits a string based on a separator (similar to String.prototype.split). Don't use JS array's split function to solve this problem.

Input: 02/20/2020
Output: ["02", "20", "2020"]

What is the input to the program?
  A string and separator.
What is the output of the program?
  An array of strings between separators.
What is the input to each recursive call?
  The shortened string.
What is the output of each recursive call?
  The string before the next separtor.
*/

const stringSplitter = (str, sep, result) => {
  result = result || [];
  // Base case
  if (str.indexOf(sep) === -1) {
    result.push(str);
  } else {
    // General case
    result.push(str.slice(0, str.indexOf(sep))) +
      stringSplitter(str.slice(str.indexOf(sep) + 1), sep, result);
  }
  return result;
};

console.log(stringSplitter('02/20/2020', '/'));

/* Result:
  ["02", "20", "2020"]
*/
