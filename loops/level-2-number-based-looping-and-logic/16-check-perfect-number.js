// 16 - Check if a number is a perfect number.
function perfectNumber(num) {
  num = Math.abs(num);
  let original = num;
  let halfOfNum = num / 2;
  let sum = 0;

  for (let i = 1; i <= halfOfNum; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }

  if (sum === original) {
    return "Perfect Number";
  }
  return "Not Perfect Number";
}

perfectNumber(56);

/* 
Approach: I loop from 1 to half of the number, find its divisors using modulo, 
add those divisors, and compare their sum with the original number.

Time Complexity: O(1)
Space Complexity: O(1)
*/
