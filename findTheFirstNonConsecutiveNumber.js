// Loop through array and check if the next index is one more than the current one
// If not, return the next index
// If all numbers are consecutive, return null

function firstNonConsecutive(arr) {
  let answer = null;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      answer = arr[i + 1];
      break;
    }
  }
  return answer;
}
