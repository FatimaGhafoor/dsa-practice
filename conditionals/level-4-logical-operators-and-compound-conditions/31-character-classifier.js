// 31 - Check whether a character is a letter, digit, or neither.
function checkCharacter(char) {
  if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
    return "Letter";
  }
  if (char >= "0" && char <= "9") {
    return "Digit";
  }
  return "Neither";
}
