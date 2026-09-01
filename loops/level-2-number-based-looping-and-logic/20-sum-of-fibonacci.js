function fibonacciSeries(n) {
  let first = 0;
  let second = 1;
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += first;
    let next = first + second;

    first = second;
    second = next;
  }
  return sum;
}

fibonacciSeries(6);

/* 
Approach: I use two variables to generate the Fibonacci sequence and a sum variable to accumulate the first n terms. 
In each iteration, I add the current Fibonacci number to the sum, calculate the next number, 
and shift the two variables forward.  

Time: O(n)
Space: O(1)
*/
