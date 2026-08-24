// 37 - Convert a single digit 0–9 into its word form.

function digitToWord(num) {
  const digitWords = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "Five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  if (num < 0 || num > 9) return false;
  return digitWords[num];
}

//-----------------------------------------------------------------------------------------------------
// If the requirement strictly means a single digit 0–9, we should also verify that it's an integer.
function digitToWord(num) {
  const digitWords = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  if (!Number.isInteger(num) || num < 0 || num > 9) {
    return false;
  }
  return digitWords[num];
}
