/* Find a way out of the maze

You have entered a Maze and need to find your way out of it. There are more than one possible paths through the Maze to the single exit point. Write a recursive function that will help you find a possible path through the maze.

The Maze is represented as a N*M matrix (in the above case, a 3X3 or a 5X7 array). The starting point is the top left corner and the exit is indicated by e. For simplicity purpose, use the bottom right corner of the maze as the exit. You can't go outside the boundaries of the maze. The maze has passages that are blocked and you can't go through them. These blocked passages are indicated by *. Passing through a blocked cell as well as passing though a cell that you have already passed before are forbidden.

For the above maze, a possible exit path can be RRDDLLDDRRRRRR

What is the input to the program?
  A maze.
What is the output of the program?
  The path to get out of the maze at 'e.'
What is the input to each recursive call?
  The maze, the row index representing the current row of the maze, and the index in the row we left off at.
What is the output of each recursive call?
  A 'R' or 'D' based on whether we can go right or need to go down.
*/

const mazeSolver = (maze, row, index) => {
  row = row || 0;
  index = index || 0;
  // Base case
  if (maze[row][index] === 'e') {
    return '';
  } else {
    // General case
    // Check to see if the next index will contain an * or if we're at the edge of the maze.
    if (maze[row][index + 1] === '*' || index === maze[row].length - 1) {
      // Return 'D' and pass in a current row and index argument as we need to go to the next row and start from that position.
      return 'D' + mazeSolver(maze, row + 1, index);
    }
    // Return 'R' as we can freely move to the right.
    return 'R' + mazeSolver(maze, row, index + 1);
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

console.log(mazeSolver(maze));

/* Result:
  RRDDRRRRDD
*/
