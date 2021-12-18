/*Modify the age.js program you wrote in the exercises for the Input/Output chapter. 
The updated code should use a for loop to display the future ages.

let readlineSync = require('readline-sync');
let age = readlineSync.question('How old are you? ');
age = parseInt(age);
console.log(`You are ${age} years old.`);
console.log(`In 10 years, you will be ${age + 10} years old.`);
console.log(`In 20 years, you will be ${age + 20} years old.`);
console.log(`In 30 years, you will be ${age + 30} years old.`);
console.log(`In 40 years, you will be ${age + 40} years old.`);
*/

/* 
//My answer:

let readlineSync = require('readline-sync');
for (let age = readlineSync.question('How old are you? '); age === 40 ; age += 10) {
  console.log(age);
  }

*/

//Provided answer:

let readlineSync = require('readline-sync');
let age = readlineSync.question('How old are you? ');
age = parseInt(age);
console.log(`You are ${age} years old.`);

for (let future = 10; future <= 40; future += 10) {
  console.log(`In ${future} years, you will be ${age + future} years old.`);
}

//personal note: ask yourself what do you want to loop over?
//we do not want to loop our current age. We want to loop over and increment the amount of time in years. 