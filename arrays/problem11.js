/* Valid Anagram - Leetcode#242 

Given two strings s and t, 
return true if t is an anagram of s, 
and false otherwise.

Input: s = "anagram", t = "nagaram"
Output: true

Input: s = "rat", t = "car"
Output: false
*/

var isAnagram = function (s, t) {
  if (ss.length !== ts.length) return false; // check first

  const ss = s.split("").sort(); // then sorting
  const ts = t.split("").sort();

  for (let i = 0; i < ss.length; i++) {
    if (ss[i] !== ts[i]) return false;
  }
  return true;
};
isAnagram("anagram", "panagram");
