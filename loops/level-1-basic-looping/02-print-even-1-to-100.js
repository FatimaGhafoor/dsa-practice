// 2 - Print all even numbers between 1 and 100
function printEvenNumbers1To100() {
  for (let i = 2; i <= 100; i += 2) {
    console.log(i);
  }
}
printEvenNumbers1To100();

/* 
Approach: I start the loop from 2 and increment by 2 in every iteration, so only even numbers are visited and printed.
Time Complexity: O(1)
Space Complexity: O(1)
Why: Both operations and extra memory remain constant regardless of input size.
*/
