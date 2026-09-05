// Find HCF (GCD) of two numbers using loops.
function findHCF(a, b) {
  let hcf = 0;
  let min = Math.min(a, b);
  for (let i = 1; i <= min; i++) {
    if (a % i === 0 && b % i === 0) {
      hcf = i;
    }
  }
  return hcf;
}

findHCF(8, 12);

/* 
Approach: Iterate from 1 to the smaller of the two numbers. 
For each number, check whether it divides both numbers completely. If it does, update the HCF. 
Since the loop runs in increasing order, the last valid divisor is the greatest common factor.

Time: O(min(a, b))
Space: O(1)
*/
