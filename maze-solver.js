/* Find a way out of the maze

You have entered a Maze and need to find your way out of it. There are more than one possible paths through the Maze to the single exit point. Write a recursive function that will help you find a possible path through the maze.

The Maze is represented as a N*M matrix (in the above case, a 3X3 or a 5X7 array). The starting point is the top left corner and the exit is indicated by e. For simplicity purpose, use the bottom right corner of the maze as the exit. You can't go outside the boundaries of the maze. The maze has passages that are blocked and you can't go through them. These blocked passages are indicated by *. Passing through a blocked cell as well as passing though a cell that you have already passed before are forbidden.

For the above maze, a possible exit path can be RRDDLLDDRRRRRR

What is the input to the program?
  A maze.
What is the output of the program?
  The directions of a path to get out at 'e.'
What is the input to each recursive call?
  The maze, row, column, and lastMove
What is the output of each recursive call?
  A direction to take.
*/

const availableMoves = (maze, row, column, lastMove) => {
  const moves = [];
  // Check if coordinates stay within bounds of the maze and whether or not it has a wall
  if (row - 1 >= 0 && maze[row - 1][column] !== '*' && lastMove !== 'D') {
    moves.push('U');
  }
  if (
    column + 1 < maze[row].length &&
    maze[row][column + 1] !== '*' &&
    lastMove !== 'L'
  ) {
    moves.push('R');
  }
  if (
    row + 1 < maze.length &&
    maze[row + 1][column] !== '*' &&
    lastMove !== 'U'
  ) {
    moves.push('D');
  }
  if (column - 1 >= 0 && maze[row][column - 1] !== '*' && lastMove !== 'R') {
    moves.push('L');
  }
  return moves;
};

const mazeSolver = (maze, row, column, lastMove) => {
  row = row || 0;
  column = column || 0;
  // Returns an array of available moves
  const moves = availableMoves(maze, row, column, lastMove);
  // Base case
  if (maze[row][column] === 'e') {
    return '';
  } else {
    // General case
    for (const move of moves) {
      if (move === 'U') {
        return move + mazeSolver(maze, row - 1, column, move);
      }
      if (move === 'R') {
        return move + mazeSolver(maze, row, column + 1, move);
      }
      if (move === 'D') {
        return move + mazeSolver(maze, row + 1, column, move);
      }
      if (move === 'L') {
        return move + mazeSolver(maze, row, column - 1, move);
      }
    }
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
  RRDDRRUURRDDDD
*/
