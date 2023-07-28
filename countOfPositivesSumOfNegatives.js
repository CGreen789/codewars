// Filter array by positive and negative. 
// length of positive array - push to answer array
// Sum of all negative numbers - push to answer array

function countPositivesSumNegatives(input) {
//   Check for invalid inputs
  if (!Array.isArray(input)) {
    return [];
    }
  if (input.length === 0) {
    return [];
  }
  
  let positiveArray = [];
  let negativeArray = [];
  let answerArray = [];
  
  input.forEach((item) => {
    if (item < 0) {
     negativeArray.push(item)
    } 
    if (item > 0) {
      positiveArray.push(item)
    }
  })
  
   let positiveCount = positiveArray.length
   answerArray.push(positiveCount);
  const negativeSum = negativeArray.reduce((a, b) => a + b, 0);
  answerArray.push(negativeSum);
  return answerArray;
}
