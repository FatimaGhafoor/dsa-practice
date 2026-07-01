//Problem #1108 — Defanging an IP Address
/*
Input:  "1.1.1.1"
Output: "1[.]1[.]1[.]1"

Input:  "255.100.50.0"
Output: "255[.]100[.]50[.]0"
*/

function defangIPaddr(address) {
  let result = "";
  for (const char of address) {
    if (char === ".") {
      result += "[.]";
    } else {
      result += char;
    }
  }
  return result;
}
