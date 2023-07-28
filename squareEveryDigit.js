// Loop through number and square each digit, push to a new array

function squareDigits(num){
//   Initialise empty array and convert the number to a string of digits
  let answer = []
  let numberArray = Array.from(String(num), Number)
  
//   Loop through to square each digit
  for (let i = 0; i < numberArray.length; i++) {
    let squaredDigit = numberArray[i] * numberArray[i]
    answer.push(squaredDigit)
    console.log(answer)
  }
//   Join the array and return a number
  let finalAnswer = answer.join('')
  return +finalAnswer;
}
