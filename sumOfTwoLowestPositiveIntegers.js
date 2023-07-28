 // Sort the numbers array ascending
// return the sum of the first two numbers in the array

function sumTwoSmallestNumbers(numbers) {  
  let ascendingArray = numbers.sort((a, b) => a - b);
  let sumOfFirstTwo = ascendingArray[0] + ascendingArray[1]
  return sumOfFirstTwo;
}
