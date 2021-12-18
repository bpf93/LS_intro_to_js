/*Write a program that uses a multiply function to multiply two numbers and returns the result.
//Ask the user to enter the two numbers, then output the numbers and result as a simple equation.
//Note: 1 function to multiply 2 numbers and 1 function to prompt the user.

$ node multiply.js
Enter the first number: 3.141592653589793
Enter the second number: 2.718281828459045
3.141592653589793 * 2.718281828459045 = 8.539734222673566

*/

/*My attempt:

function multiply(prompt) {
  let rl = require('readline-sync');
  let number = rl.question(prompt);
  return number;
}

num1 = multiply("Enter the first number: ");
num2 = multiply("Enter the second number: ");
result = (num1 * num2);
console.log(`${num1} * ${num2} = ${result}`);

result:
Enter the first number: 23
Enter the second number: 45
23 * 45 = 1035
*/

//Answer provided:

function multiply(left, right) {
  return left * right; //returns the result of left * right
}

function getNumber(prompt) {
  let rl = require('readline-sync');
  return parseFloat(readlineSync.question(prompt));
}

let left = getNumber("Enter the first number: ");
let right = getNumber("Enter the second number: ");
console.log(`${left} * ${right} = ${multiply(left, right)}`);
