// #22 - Determine whether the middle digit of a 3-digit number is largest, smallest, or neither.
function isMiddleDigit(num) {
  const lastDigit = num % 10;
  const middleDigit = Math.floor((num / 10) % 10);
  const firstDigit = Math.floor(num / 100);

  if (middleDigit < firstDigit && middleDigit < lastDigit) {
    return "Middle is smallest";
  }

  if (middleDigit > firstDigit && middleDigit > lastDigit) {
    return "Middle is largest";
  }

  return "Neither smallest nor largest";
}