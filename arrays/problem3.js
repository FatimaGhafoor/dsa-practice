//Problem 3 — Last problem aaj ka
/*
Input:  nums = [2,5,1,3,4,7], n = 3
Output: [2,3,5,4,1,7]

Explanation:
Array ke pehle n elements: [2,5,1]
Array ke baad wale n elements: [3,4,7]
Inhe interleave karo:
[2,3,5,4,1,7]
→ nums[0], nums[3], nums[1], nums[4], nums[2], nums[5]
*/

var shuffle = function (nums, n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(nums[i], nums[i + n]);
  }
  return result;
};
shuffle([2, 5, 1, 3, 4, 7], 3);

[2, 3, 5, 4, 1, 7];
