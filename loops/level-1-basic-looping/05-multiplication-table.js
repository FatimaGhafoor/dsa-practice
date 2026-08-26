// 5- Print the table of a given number (\(n \times 1\) to \(n \times 10\))
function tableOfGivenNum(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
}
tableOfGivenNum(2);

/* 
Approach: I start the loop from 1 and increment by 1 in every iteration till 10. In each iteration, I multiply the given number by the current value of i and print the result. 
Time Complexity: O(1) because the loop always runs a fixed 10 times.
Space Complexity: O(1) because only the loop variable is used.
*/
