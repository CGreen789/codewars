// .forEach - total the count of each, find the one that appears the odd amount of times
function findOdd(A) {
    const counter = {};
   
  //   Create an object and count each time a number occurs
  A.forEach(ele => {
      if (counter[ele]) {
          counter[ele] += 1;
      } else {
          counter[ele] = 1;
      }
  });
    
  //  Create a variable to hold the answer
   let answer = null; 
  //   Turn the oject into a keys array
  const keys = Object.keys(counter)
  // Check each array for an off number of occurences
    keys.forEach((key, index) => {
      if (counter[key]%2 === 1) {
        answer = key;
      }
      
  });
  //   return a number, not a string
    return +answer
  }