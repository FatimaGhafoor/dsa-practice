// 15 - Check if a number is an Armstrong number.
function armStrong(num) {
  num = Math.abs(num);

  let original = num;
  let totalDigits = 0;

  while (num > 0) {
    num = Math.floor(num / 10);
    totalDigits++;
  }

  num = original;
  let sum = 0;

  while (num > 0) {
    let digit = num % 10;
    sum += Math.pow(digit, totalDigits);
    num = Math.floor(num / 10);
  }

  if (sum === original) {
    return "Number is Armstrong";
  }
  return "Not Armstrong";
}

console.log(armStrong(153));
