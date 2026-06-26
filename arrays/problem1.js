//Problem 1 — Running Sum of 1D Array (LeetCode #1480)

/* 
Input:  [1, 2, 3, 4]
Output: [1, 3, 6, 10]

Explanation:
index 0: 1
index 1: 1+2 = 3
index 2: 1+2+3 = 6
index 3: 1+2+3+4 = 10
*/

var runningSum = function (nums) {
  const sumArr = [];
  let sum = 0;
  for (let num of nums) {
    sum += num;
    sumArr.push(sum);
  }
  return sumArr; 
};

runningSum([1, 2, 3, 4]);
