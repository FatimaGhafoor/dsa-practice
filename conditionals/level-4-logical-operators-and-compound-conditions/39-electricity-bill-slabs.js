// 39 - Electricity Bill Using Slabs

function electricityBill(units) {
  if (typeof units !== "number" || units < 0 || Number.isNaN(units)) {
    return "Invalid input. Units must be a non-negative number.";
  }

  const fixedMeterCharge = 150;
  let consumptionCost;

  if (units <= 100) {
    consumptionCost = units * 5;
  } else if (units <= 300) {
    consumptionCost = 100 * 5 + (units - 100) * 10;
  } else {
    consumptionCost = 100 * 5 + 200 * 10 + (units - 300) * 15;
  }

  const subtotal = fixedMeterCharge + consumptionCost;
  const taxAmount = subtotal * 0.15;
  const totalBill = subtotal + taxAmount;

  return totalBill.toFixed(2);
}
