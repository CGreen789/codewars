// assign letters to a variable
// make sure all letters are lower case in the string to match the alphabet array
// use .every to see if the string includes all letters.

function isPangram(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  string = string.toLowerCase();
  return alphabet.every((x) => string.includes(x));
}
