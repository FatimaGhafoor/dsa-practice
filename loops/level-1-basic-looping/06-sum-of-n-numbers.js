// 6- Print the sum of first n natural numbers.
function printSumOfNaturals(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  console.log(sum);
}
printSumOfNaturals(3);

/* 
Approach: I start the loop from 1 and increment by 1 in every iteration. In each iteration, I add the current i to the sum variable.
Time Complexity: O(n) because the loop runs n times.
Space Complexity: O(1) because only a constant number of variables are used, regardless of n.
*/
