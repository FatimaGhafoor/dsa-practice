function isPrime(num) {
  if (
    typeof num !== "number" ||
    num <= 1 ||
    Number.isNaN(num) ||
    num % 1 !== 0
  ) {
    return false;
  }

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

isPrime(98);
/* 
Approach: I first filter out invalid inputs and numbers less than or equal to 1. 
I then run a single loop starting from 2 up to the square root of the number (i * i <= num). 
If any index cleanly divides the input, the function returns false early; otherwise, 
it defaults to true.

Time Complexity: O(√n) because the loop boundary scales only up to the square root of the number.
Space Complexity: O(1) because execution space memory remains entirely constant.
*/
