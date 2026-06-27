//Problem 2 — Richest Customer Wealth (LeetCode #1672)
/*
Input: accounts = [[1,2,3],[3,2,1]]
Output: 6

Explanation:
Customer 1 wealth: 1+2+3 = 6
Customer 2 wealth: 3+2+1 = 6
Return the maximum wealth = 6
*/

var maximumWealth = function(accounts) {
  let maxWealth = 0;
  for (let customer of accounts) {
    let customerWealth = 0;
    for (let account of customer) {
      customerWealth += account;
    }
    if (customerWealth > maxWealth) {
      maxWealth = customerWealth;
    }
  }
  return maxWealth;
};