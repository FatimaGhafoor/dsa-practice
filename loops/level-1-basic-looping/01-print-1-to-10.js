// 1- Print numbers from 1 to 10
function printNumbers1To10() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}
printNumbers1To10();

/* 
Approach: A for loop runs from 1 to 10 and prints each number.
Time Complexity: O(1) because the loop always executes exactly 10 times.
Space Complexity: O(1) because only a constant amount of extra memory is used.
Why: Both operations and extra memory remain constant regardless of input size.
*/