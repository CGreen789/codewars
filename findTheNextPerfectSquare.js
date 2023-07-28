// Check to see if it's a perfect square first
// Number.isInteger and Math.sqrt()
// Find the sqaure root of the input, add one and the square the result and return it

function findNextSquare(sq) {
  let squareRoot = Math.sqrt(sq)
  
  if (Number.isInteger(squareRoot) ) {     
  
  let squareRoot = Math.sqrt(sq)
  return (squareRoot +1) * (squareRoot +1);
  
  } else {
  return -1
  }
}
