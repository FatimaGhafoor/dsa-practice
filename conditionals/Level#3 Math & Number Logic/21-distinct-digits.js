// #21 - Check whether all digits of a 3-digit number are distinct.
function areDigitsDistinctInNumber(num) {
  const lastDigit = num % 10;
  const middleDigit = Math.floor((num / 10) % 10);
  const firstDigit = Math.floor(num / 100);

  return (
    firstDigit !== middleDigit &&
    firstDigit !== lastDigit &&
    middleDigit !== lastDigit
  );
}