// 13 - Check if a number is a palindrome
function checkPalindrome(num) {
  let original = num;
  let reverse = 0;

  while (num > 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
  }

  if (reverse === original) {
    return `${original} is palindrome`;
  }
  return "Not Palindrome";
}

/* 
Approach: I preserve the original number, then repeatedly extract each digit using modulo 10 and build its reverse using reverse * 10 + digit. After processing all digits, I compare the reversed number with the original number. If both are equal, the number is a palindrome.
Time Complexity: O(n), where n is the number of digits, because the loop runs once per digit.
Space Complexity: O(1), because only a fixed number of variables are used.
*/
