// Function that takes in a number and decreases by 1 and adds to an array.
// Push numbers to an array, not including 0.
// .push to answer array
// while loop?

const reverseSeq = (n) => {
  let answerArray = [];
  while (n >= 1) {
    answerArray.push(n);
    n--;
  }
  return answerArray;
};
