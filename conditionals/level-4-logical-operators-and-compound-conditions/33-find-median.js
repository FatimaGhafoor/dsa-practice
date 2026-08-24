// 33 - Given three numbers, find the median.
function findMedianOfThreeNumbers(a, b, c) {
  const sum = a + b + c;
  const max = Math.max(a, b, c);
  const min = Math.min(a, b, c);

  return sum - max - min;
}
