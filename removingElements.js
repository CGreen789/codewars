// Loop through array and remove every other element
// if (i % 2 === 0) {

function removeEveryOther(arr){
 let answerArray = []
  for (let i = 0; i<arr.length; i++) {
    if (i % 2 === 0) {
      answerArray.push(arr[i])
    }
  }
    return answerArray;
}
