function validatePassword(password) {
  if (password.length < 8) {
    return "Password must be greater than or equal to 8 characters.";
  }
  const hasDigit = password
    .split("")
    .some((char) => char >= "0" && char <= "9");

  if (!hasDigit) {
    return "Password must contain at least one digit.";
  }

  return "Valid Password";
}
