// Find HCF (GCD) of two numbers using loops.
function findHCF(a, b) {
  let hcf = 0;
  let min = Math.min(a, b);
  for (let i = 1; i <= min; i++) {
    if (a % i === 0 && b % i === 0) {
      hcf = i;
    }
  }
  return hcf;
}

findHCF(8, 12);
