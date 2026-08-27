// 12 - Print the reverse of a given number.
function reverseDigit(num) {
  num = Math.abs(num);

  let reverse = 0;
  while (num > 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
  }
  return reverse;
}

console.log(reverseDigit(12345));

/* 
Approach: I repeatedly use modulo 10 to extract the last digit, add it to the reversed number using reverse * 10 + digit, and then remove the last digit by dividing the number by 10.
Time Complexity: O(n), where n is the number of digits, because the loop runs once per digit.
Space Complexity: O(1), because only a fixed number of variables are used.
*/
