// the following code should reorder the array from lowest to highest
// and its output when run should, if working, be [2,3,4,5,8]
// The code has three errors, find them and fix them and use node to check it is
// working.

var testingArray = [8, 4, 2, 3, 5];

let bubbleSort = (inputArr) => {
  let len = inputArr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (inputArr[j] > inputArr[j + 1]) {
        let tmp = inputArr[j];
        inputArr[j] = inputArr[j + 1];
        inputArr[j + 1] = tmp;
      }
    }
  }
  return inputArr
};

console.log(bubbleSort(testingArray));

// diagram for bubble sort for context if needed : https://www.productplan.com/uploads/bubble-sort-1024x683-2.png
