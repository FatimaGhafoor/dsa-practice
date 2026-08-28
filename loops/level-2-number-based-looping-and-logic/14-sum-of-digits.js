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
