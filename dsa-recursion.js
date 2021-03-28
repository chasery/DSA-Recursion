/* 1. Counting sheep

    Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.

    Input: 3
    Output:
    3: Another sheep jumps over the fence
    2: Another sheep jumps over the fence
    1: Another sheep jumps over the fence
    All sheep jumped over the fence

    What is the input to the program?
      The number of sheep to count.
    What is the output of the program?
      A series of 'Another sheep jumps over the fence' and a final 'All sheep jumped over the fence'
    What is the input to each recursive call?
      The number of sheep -1.
    What is the output of each recursive call?
      A string output of 'Another sheep jumps over the fence' if count !== 0 and 'All sheep jumped over the fence' if count === 0

    Linear time O(n)
*/

const countSheep = (count) => {
  // Base case
  if (count === 0) {
    return 'All sheep jumped over the fence';
  }
  // General case
  return (
    `${count}: Another sheep jumps over the fence \n` + countSheep(count - 1)
  );
};

countSheep(8);

/* Result:
8: Another sheep jumps over the fence 
7: Another sheep jumps over the fence 
6: Another sheep jumps over the fence 
5: Another sheep jumps over the fence 
4: Another sheep jumps over the fence 
3: Another sheep jumps over the fence 
2: Another sheep jumps over the fence 
1: Another sheep jumps over the fence 
All sheep jumped over the fence 
*/

/* 2. Power calculator

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

    Linear time O(n)
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

powerCalculator(10, 4);

/* Result:
  10000
*/

/* 3. Reverse string

    Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

    What is the input to the program?
      A string.
    What is the output of the program?
      The reversed string.
    What is the input to each recursive call?
      A string of characters excluding the first one.
    What is the output of each recursive call?
      The recursive call for the string minus the first character of the string and then the first character.

    Linear time O(n)
*/

const reverseString = (string) => {
  if (string === '') {
    return '';
  } else {
    return reverseString(string.substr(1)) + string.charAt(0);
  }
};

reverseString('Hello, world!');

/* Result:
  !dlrow ,olleH
*/

/* 4. Triangular number

    Calculate the nth triangular number. A triangular number counts the objects that can form an equilateral triangle. The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.

    What is the input to the program?
      An integer.
    What is the output of the program?
      The number of dots to create an equilateral triangle.
    What is the input to each recursive call?
      The number minus one.
    What is the output of each recursive call?
      The number of dots that row needs.

    Linear time O(n)
*/

const triangularNumber = (num) => {
  // Base case
  if (num <= 1) {
    return 1;
  }
  // General case
  return num + triangularNumber(num - 1);
};

triangularNumber(9);

/* Result:
  45
*/

/* 5. String splitter

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

    Linear time O(n)
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

stringSplitter('02/20/2020', '/');

/* Result:
  ["02", "20", "2020"]
*/

/* 6. Fibonacci

    Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

    What is the input to the program?
      A number to get the fibonacci position.
    What is the output of the program?
      The array containing the fibonacci sequence to the provided position.
    What is the input to each recursive call?
      The number minus one.
    What is the output of each recursive call?
      The addition of the previous two positions.

    Linear time O(n)
*/

const fibonacci = (num) => {
  if (num === 1) {
    return [1];
  } else if (num === 2) {
    return [1, 1];
  } else {
    const result = fibonacci(num - 1);
    result.push(result[result.length - 2] + result[result.length - 1]);
    return result;
  }
};

fibonacci(7);

/* Result:
  [1, 1, 2, 3, 5, 8, 13]
*/

/* 7. Factorial
    Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by multiplying that number by each number between itself and 1. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

    What is the input to the program?
      A number.
    What is the output of the program?
      The factorial of the provided number.
    What is the input to each recursive call?
      The number - 1.
    What is the output of each recursive call?
      The number multiplied by the previous number.

    Linear time O(n)
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

factorial(5);

/* Result:
  120
*/

/* 8 & 9 Find a way out of the maze

    Part 1: You have entered a Maze and need to find your way out of it. There are more than one possible paths through the Maze to the single exit point. Write a recursive function that will help you find a possible path through the maze.

    The Maze is represented as a N*M matrix (in the above case, a 3X3 or a 5X7 array). The starting point is the top left corner and the exit is indicated by e. For simplicity purpose, use the bottom right corner of the maze as the exit. You can't go outside the boundaries of the maze. The maze has passages that are blocked and you can't go through them. These blocked passages are indicated by *. Passing through a blocked cell as well as passing though a cell that you have already passed before are forbidden.

    For the above maze, a possible exit path can be RRDDLLDDRRRRRR

    Part 2: Use the above maze and modify your solution so it finds All the possible exit paths through the Maze. To find all possible exit paths through the maze, think about how many places you can move at each turn. Possibly up, down, left or right?

    Notice that this maze has 3 exits paths. Your recursive function should print all three of the paths with the proper directions.

    What is the input to the program?
      A maze.
    What is the output of the program?
      The paths to get out of the maze at 'e.'
    What is the input to each recursive call?
      The maze, row, column, direction, and path.
    What is the output of each recursive call?
      A direction if we can move that direction.
*/

const mazeSolver = (maze, row = 0, column = 0, dir = '', path = '') => {
  if (row < 0 || column < 0) {
    return;
  }
  if (row >= maze.length) {
    return;
  }
  if (column >= maze[0].length) {
    return;
  }

  path += dir; // Store direction to current path

  if (maze[row][column] === 'e') {
    console.log('Path to the exit: ' + path);
    return;
  }
  // Check
  if (maze[row][column] === ' ') {
    maze[row][column] = '+'; // Fill current position to prevent infinite loop of going back and forth
    mazeSolver(maze, row - 1, column, 'U', path);
    mazeSolver(maze, row + 1, column, 'D', path);
    mazeSolver(maze, row, column - 1, 'L', path);
    mazeSolver(maze, row, column + 1, 'R', path);
    maze[row][column] = ' '; // Clear current position
  }
};

let mySmallestMaze = [['e']];
let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e'],
];
let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e'],
];

mazeSolver(maze);

/* Result:
  Path to the exit: RRDDLLDDRRRRRR
  Path to the exit: RRDDRRUURRDDDD
  Path to the exit: RRDDRRRRDD
*/
