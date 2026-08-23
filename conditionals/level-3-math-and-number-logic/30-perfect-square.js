// #30 -  Check whether a number is a perfect square (without using the square root function). 
function isPerfectSquare(num) {
  if (num < 0) return false;
  for (let i = 0; i * i <= num; i++) {
    if (i * i === num) {
      return true;
    }
  }

  return false;
}
