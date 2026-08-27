// 11 - Count the number of digits in a given number.
function digitCounter(num) {
  num = Math.abs(num);
  if (num === 0) return 1;

  let counter = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    counter++;
  }

  return counter;
}

/* 
Approach: I repeatedly divide the number by 10 to remove its last digit and increment a counter for each digit. I also handle negative numbers and zero separately.
Time Complexity: O(n), where n is the number of digits, because the loop runs once per digit.
Space Complexity: O(1), because only a fixed number of variables are used.
*/
