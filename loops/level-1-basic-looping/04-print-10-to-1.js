// 4- Print numbers from 10 down to 1.
function print10DownTo1() {
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
}
print10DownTo1();

/* 
Approach: I start the loop from 10 and decrement by 1 in every iteration, so the loop visits and prints numbers from 10 down to 1.
Time Complexity: O(1) because the loop always runs a fixed 10 times.
Space Complexity: O(1) because only the loop variable is used.
*/