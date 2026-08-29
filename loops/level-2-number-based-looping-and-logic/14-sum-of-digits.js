// 14 - Find the sum of digits of a number.
function sumOfNum(num) {
  num = Math.abs(num);
  let sum = 0;

  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

/* 
Approach: I repeatedly extract the last digit using modulo 10, 
add it to the sum, and remove the last digit by dividing the number by 10.

Time Complexity: O(d)
Space Complexity: O(1)
*/
