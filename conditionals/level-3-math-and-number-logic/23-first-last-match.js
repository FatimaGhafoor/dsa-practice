// #23 - Take a 4-digit number and check if the first and last digits are equal.
function isFirstAndLast(num) {
  const lastDigit = num % 10;
  const firstDigit = Math.floor(num / 1000);

  return firstDigit === lastDigit;
}
