// This code should count up by one and log the index five times, it's output should be:
// Starting Loop
// Current Count : 0
// Current Count : 1
// Current Count : 2
// Current Count : 3
// Current Count : 4
// Loop stopped!
// The following code has 4 errors, find them and fix them and use node to check the output.
// const variable can't be changed
let count = 0;

console.log("Starting Loop");

// .log is missed
do {
  console.log("Current Count : " + count);
  count++;
} while (count < 5);

console.log("Loop stopped!");

// errors: 1 - const variable cant be changed;
// errors 2 - .log is missed
