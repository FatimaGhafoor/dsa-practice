//Problem #1512 — Number of Good Pairs

/*Input:  nums = [1,2,3,1,1,3]
Output: 4

Explanation:
Good pair = nums[i] === nums[j] aur i < j
(0,3) → nums[0]=1, nums[3]=1 ✅
(0,4) → nums[0]=1, nums[4]=1 ✅
(3,4) → nums[3]=1, nums[4]=1 ✅
(2,5) → nums[2]=3, nums[5]=3 ✅
Total = 4
*/

var numIdenticalPairs = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
  }
  return count;
};
numIdenticalPairs([1, 2, 3, 1, 1, 3]);
