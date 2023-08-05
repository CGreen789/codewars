// return a string stating how many errors.
// total errors / total characters
// Turn string into an array, check using regex
// Tally in numerator if not a - m
// Denominator = total length

function printerError(s) {
  let array = s.split("");
  let denominator = array.length;
  let numerator = 0;

  for (let i = 0; i < array.length; i++) {
    // Use regex to check if the character is not a - m
    if (/[n-z]/i.test(array[i])) {
      numerator++;
    }
  }
  return `${numerator}/${denominator}`;
}
