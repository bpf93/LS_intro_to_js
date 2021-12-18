/*
Write a function that checks whether a string is empty or not. For example:

isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true
*/

//My answer:


function isBlank(str) {
let blank = str.length === 0;
console.log(blank);
}

isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true

/*Answer provided:

function isBlank(string) {
  return string.length === 0;
}

A string is empty if it does not contain any characters. The easiest way to check this is to look at the length of the string.
*/
