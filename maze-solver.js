/* Find a way out of the maze

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
