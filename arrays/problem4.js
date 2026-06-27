//Problem #1431 — Kids With the Greatest Number of Candies
/* 
Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true, true, true, false, true]

Explanation: 
Max candies = 5
Kid 0: 2+3=5 >= 5 → true
Kid 1: 3+3=6 >= 5 → true
Kid 2: 5+3=8 >= 5 → true
Kid 3: 1+3=4 >= 5 → false
Kid 4: 3+3=6 >= 5 → true
*/
var kidsWithCandies = function (candies, extraCandies) {
  let maximum = 0;
  for (let i = 0; i < candies.length; i++) {
    if (maximum <= candies[i]) {
      maximum = candies[i];
    }
  }
  let result = [];

  for (let candy of candies) {
    candy += extraCandies;
    result.push(candy >= maximum);
  }
  return result;
};

kidsWithCandies([2, 3, 5, 1, 3], 3);
