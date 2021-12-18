//In the exercises for the previous chapter, you wrote a dynamic greeter program named greeter.js. Add a function to this program that solicits the user's first and last names in separate invocations; the function should return the appropriate name as a string. Use the return values to greet the user with their full name.

/*let rlSync = require('readline-sync');
let firstName = rlSync.question("What's your first name?\n");
let lastName = rlSync.question("What is your last name?\n");
console.log(`Hello, ${firstName} ${lastName}!`);
*/

/* My attempt:

let rl = require('readline-sync')

function firstName() {
  return rl.question("What's your first name?\n");
}

function lastName() {
  return rl.question("What is your last name?\n");
}


let name1 = firstName();
let name2 = lastName();


console.log(`Hello, ${name1} ${name2}! Nice to meet you!`);
*/

//Answer provided:
function getName(prompt) {
  let rl = require('readline-sync');
  let name = rl.question(prompt);
  return name;
}

let firstName = getName("What is your first name? ");
let lastName = getName("What's is your last name? ");
console.log(`Hello, ${firstName} ${lastName}!`);
