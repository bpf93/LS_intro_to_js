/*How can you check whether a variable holds a value that is an array? For example, imagine you start writing a function and want to check whether its argument is an array:

function filter(input) {
  // Is input an array?
}


*/

//My answer:
function filter(input) {
  return Array.isArray(input);
}

console.log(filter([1,2,3]));
console.log(filter('Hi'));

/* Answer provided:
You can use the Array.isArray() method. For example:

Copy Code
let someValue1 = [0, 1, 0, 0, 1];
let someValue2 = 'I leave you my Kingdom, take good care of it.';

Array.isArray(someValue1); // true
Array.isArray(someValue2); // false
Discussion
Note that the typeof operator returns 'object' for arrays, because arrays are objects. Therefore it does not distinguish between arrays and other objects.
*/