// Use a for loop to ...
// 1. Log numbers from 1 to 100 that are divisible by 5
let divisibleByFive = [];
for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    divisibleByFive.push(i);
  }
}
console.log(divisibleByFive.join());

// 2. Use a nested for loop to print “I’m the outer loop” 3 times and “I’m the inner loop” within the inner loop.
