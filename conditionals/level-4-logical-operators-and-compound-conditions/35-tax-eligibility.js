// 35 - Given income and age, determine tax eligibility

function isTaxEligible(age, income) {
  const taxFreeLimit = 400000;

  if (age >= 18 && income > taxFreeLimit) {
    return "Eligible for Tax";
  }

  return "Not Eligible for Tax";
}
