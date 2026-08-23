// #24 - Check whether a given integer is single-digit, double-digit, or multi-digit.
function digitNumber(num) {
  num = Math.abs(num);

  if (num <= 9) {
    return "Number is Single Digit";
  }
  if (num <= 99) {
    return "Number is Double Digit";
  }
  return "Number is Multi Digit";
}
