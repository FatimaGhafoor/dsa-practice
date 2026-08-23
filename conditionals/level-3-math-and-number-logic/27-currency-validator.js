// #27 - Check whether an amount can be evenly divided into 2000, 500, and 100 currency notes.
function validCurrencyNote(currency) {
  return currency % 100 === 0;
}
