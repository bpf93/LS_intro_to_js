//First, let's define add and subtract functions and call them:

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

let sum = add(20, 45);
console.log(sum); // => 65

let difference = subtract(80, 10);
console.log(difference); // => 70

/*
in a process called function composition, JavaScript lets us use a function call as an argument to another function. Stated differently, we're saying that we can pass add(20, 45) and subtract(80, 10) as arguments to another function:
*/

console.log(add(20, 45)); // => 65
console.log(subtract(80, 10)); // => 70

//Passing the function call's return value to console.log is the canonical example of function composition in JavaScript.

//you can do more complicated operations:
function times(num1, num2) {
  return num1 * num2;
}

console.log(times(add(20, 45), subtract(80, 10))); // => 4550
//4550 == ((20 + 45) * (80 - 10))

//produces same result as example above:

let sum = add(20, 45);
let difference = subtract(80, 10);
let result = times(sum, difference);
console.log(result);

//even more complicated example:
add(subtract(80, 10), times(subtract(20, 6), add(30, 5))); // => 560

