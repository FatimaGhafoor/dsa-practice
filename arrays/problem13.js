/* Ransom Note - Leetcode#383

Given two strings ransomNote and magazine, 
return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
Each letter in magazine can only be used once in ransomNote.

Input: ransomNote = "a", magazine = "b"
Output: false

Input: ransomNote = "aa", magazine = "ab"
Output: false

Input: ransomNote = "aa", magazine = "aab"
Output: true
*/
var canConstruct = function(ransomNote, magazine) {
    for (let char of ransomNote) {
        if (!magazine.includes(char)) {
            return false;
        }
        magazine = magazine.replace(char, "");
    }
    return true;
};