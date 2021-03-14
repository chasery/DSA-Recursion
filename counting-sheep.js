/* Counting sheep

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

console.log(countSheep(8));

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
