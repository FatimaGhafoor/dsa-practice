function isPrimeNumber() {
  for (let i = 2; i <= 100; i++) {
    let isPrime = true;

    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(i);
    }
  }
}
isPrimeNumber();

/* Approach: I use a nested loop where the outer loop checks each number, 
and the inner loop checks divisors up to the square root of that number. 

Time Complexity: O(n√n)
Space Complexity: O(1)
*/
