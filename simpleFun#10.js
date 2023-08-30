// Take in two numbers and give out a number
// while loop to create an array of the digits?
// Loop through and convert all numbers to binary .toString(2) - put these back as numbers
// Loop through and add all digits together, return the result

function rangeBitCount(a, b) {
    let counter = a;
    let numberArray = []
    
  // while loop to create the array of integers
    while (counter <= b) {
      numberArray.push(counter)
      counter++
    }
    
  // Loop through and convert to binary
    for (let i = 0; i < numberArray.length; i++) {
      numberArray[i] = numberArray[i].toString(2).split('')
    }
    
  // remove nested arrays and intialise sum variable
    let flatBinaryArray = numberArray.flat()
      let sum = 0
      
  // loop through, convert back to a number before adding together
    for (let i = 0; i < flatBinaryArray.length; i++) {
      flatBinaryArray[i] = +flatBinaryArray[i]
      sum += flatBinaryArray[i]
    }
    return sum;
  }