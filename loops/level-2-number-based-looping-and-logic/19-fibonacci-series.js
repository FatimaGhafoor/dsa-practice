function fibonacciSeries(n) {
  let first = 0;
  let second = 1;

  for (let i = 1; i <= n; i++) {
    console.log(first);
    let next = first + second;

    first = second;
    second = next;
  }
}

fibonacciSeries(6);

/* 
Approach:
I started with the first two Fibonacci numbers, 0 and 1, as first and second. 
Then I used a loop that runs n times. In each iteration, I printed the current first value, 
calculated the next Fibonacci number by adding first and second, 
and then updated both variables so they move forward to the next two Fibonacci numbers.

Time Complexity: O(n) 
Space Complexity: O(1) 
*/
