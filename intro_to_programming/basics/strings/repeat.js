/*Implement a function repeat that repeats an input 
string a given number of times, as shown in the example 
below; without using the pre-defined string method 
String.prototype.repeat().

repeat(3, 'ha'); // 'hahaha'
*/

//My answer:

//for loop
function repeat(repetitions, string) {
  let newStr = "";
  for (count = 0; count < repetitions; count += 1) {
    newStr += string;
  }
  console.log(newStr);
}

repeat(3, 'ha');

//while loop
function repeat(number, string) {
  let newStr = "";
  let count = 0
  while (count < number) {
    newStr += string;
    count += 1;
  }
  console.log(newStr);
}

repeat(3, 'ha');

/*let multi = 2;
let str = "Little lamb";
*/

/*function repeat (multi, string) {
  let multiStr = "";

for(let i = 0; i < multi; i++){
  multiStr += string
}
console.log(multiStr);
}

repeat(2, "Little lamb"); // "Little lambLittle lamb"
*/

/*
Answer provided:

function repeat(n, string) {
  let repetitions = '';

  while (n > 0) {
    repetitions += string;
    n -= 1;
  }

  return repetitions;
}
*/