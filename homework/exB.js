// The todaysGreeting() function should run three console log greetings.
// The myCounter function should count and return how many times it has been run.

// The output of the file when run should be:
// Good morning Lisa
// Thanks for all you have done during yesterday
// Today you should practice your JavaScript further.
// 2

// The code has 6 errors, find them and fix them and use node to check it is working.

const morningGreetings = (name) => {
  console.log(`Good morning ${name}`);
};
const toDo = function (taskName) {
  console.log(`Today you should ${taskName}`);
};

const todaysGreeting = () => {
  morningGreetings("Lisa");
  console.log(`Thanks for all you have done during yesterday`);
  toDo("practice your JavaScript further.");
};

todaysGreeting();

function myCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}
const noOfTimes = myCounter();
noOfTimes();

console.log(noOfTimes());
