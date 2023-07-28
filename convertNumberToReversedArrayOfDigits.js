// split n into array and reverse it
// Array.from(String(n), Number)

function digitize(n) {
  let array = Array.from(String(n), Number);
  let reversedArray = array.reverse();
  return reversedArray;
}
