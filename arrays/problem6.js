//Problem #771 — Jewels and Stones

/* 
Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
*/


var numJewelsInStones = function (jewels, stones) {
  const jewelSet = new Set(jewels);
  let count = 0;
  for (const stone of stones) {
    if (jewelSet.has(stone)) {
      count++;
    }
  }
  return count;
};
numJewelsInStones("aA", "aAAbbbb");
