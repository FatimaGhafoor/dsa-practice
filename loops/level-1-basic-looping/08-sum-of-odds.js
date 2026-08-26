// 8 - Print the sum of all odd numbers up to n
function sumOfOddOnly(n) {
  let sum = 0;
  for (let i = 1; i <= n; i += 2) {
    sum = sum + i;
  }
  console.log(sum);
}

sumOfOddOnly(6);

/* 
Approach: I start the loop from 1 and increment by 2 in every iteration, so the loop visits only odd numbers. I add each odd number to the sum variable.
Time Complexity: O(n)
Space Complexity: O(1)
*/