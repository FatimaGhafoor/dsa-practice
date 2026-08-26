// 9 - Print the factorial of a given number
function findFactorial(n) {
  if (n < 0) return "Not defined for negative numbers";
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}
findFactorial(5);

/* 
Approach: I initialize result with 1, then loop from 1 to n. In each iteration, I multiply the current i with result to calculate the factorial.
Time Complexity: O(n) 
Space Complexity: O(1)
*/
