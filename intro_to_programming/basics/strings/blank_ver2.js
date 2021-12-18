/*
Change your isBlank function from the previous exercise 
to return true if the string is empty or only contains 
whitespace. For example:

isBlank('mars'); // false
isBlank('  ');   // true
isBlank('');     // true

*/

function isBlank(string) {
  return string.length === 0 || string.trim().length === 0;
}

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // true
console.log(isBlank(''));     // true
console.log(isBlank(' kdjfod ')); // false

/*Answer provided:
function isBlank(string) {
  return string.trim().length === 0;
}
*/