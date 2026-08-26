// 7 - Print the sum of all even numbers up to n.
function sumOfEvenOnly(n) {
  let sum = 0;
  for (let i = 2; i <= n; i += 2) {
    sum = sum + i;
  }
  console.log(sum);
}
sumOfEvenOnly(6);

/* 
Approach: I start the loop from 2 and increment by 2 in every iteration, so the loop visits only even numbers. I then add each even number to the sum variable.
Time Complexity: O(n) 
Space Complexity: O(1)
*/
