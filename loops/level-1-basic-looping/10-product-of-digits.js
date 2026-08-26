// 10 - Print the product of digits of a given number.
function productOfDigits(num) {
  let absoluteNum = Math.abs(num);
  let digits = absoluteNum.toString().split("");
  let product = 1;

  for (let digit of digits) {
    product = product * Number(digit);
  }

  return product;
}

/* 
Approach: I use Math.abs() to handle negative numbers, convert the number to a string, split it into individual digits, and use a for...of loop to calculate their product.
Time Complexity: O(d), where d is the number of digits, because each digit is processed once.
Space Complexity: O(d) because the split() method creates an array containing all digits.
*/
