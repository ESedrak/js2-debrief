// 1. a) Declare and initialise an array with the below 5 names and ages (hint: each array item will be its own array like [[202, "Barbara", 31], ...])
//  i. 202,"Barbara", 31
//  ii. 203,"David", 22
//  iii. 204,"Alex", 35
//  iv. 205,"Sue", 24
// b) Log the length of the array
// c) Log the last element in the array
// d) Add John who is 45 years old with id 206 to the end of the array (on a new line, without just writing it into the initial array)
// e) Remove the first item from the array (on a new line, without just going up above and editing the code of the initial array)

const arrayPeople = [
  [202, "Barbara", 31],
  [203, "David", 22],
  [204, "Alex", 35],
  [205, "Sue", 24],
];

// Length of array
console.log(arrayPeople.length);

//Last element of the array
console.log(arrayPeople.slice(-1));

// add extra person to the end
arrayPeople.push([206, "John", 45]);
console.log(arrayPeople);

// remove first person - store it in new variable
let firstPerson = arrayPeople.shift();
console.log(arrayPeople);

// Come back to challenges if rest of work is all complete
// Challenge - Use a for loop through the array to search for ID = 205 and update Sue’s name to Susan
// Challenge - Remove an item from the middle of the array. ID=204

// update Susans name
// Loop through each - and replace the name if the first element of an array === 205

for (let i = 0; i < arrayPeople.length; i++) {
  if (arrayPeople[i][0] === 205) {
    arrayPeople[i][1] = "Susan";
  }
}

// filter through the array and look for an ID for 204
let removedItem = arrayPeople.filter((remove) => remove[0] !== 204);

console.log(removedItem);
