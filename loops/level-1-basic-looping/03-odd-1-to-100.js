// 3 - Print all odd numbers between 1 and 100
function printOddNumbers1To100() {
  for (let i = 1; i <= 100; i += 2) {
    console.log(i);
  }
}
printOddNumbers1To100();

/* 
Approach: I start the loop from 1 and increment by 2 in every iteration, so the loop visits and prints only odd numbers.
Time Complexity: O(1) because the loop has a fixed limit of 100.
Space Complexity: O(1) because only a constant amount of extra memory is used.
*/
