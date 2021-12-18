/*
Use map and filter to first determine the
 lengths of all the elements in an array
  of string values, then discard the 
  even values (keep the odd values).

  Hint:
  Your first step should be to create an 
  array of the lengths, 
  e.g., [1, 4, 5, 3, 2].

*/

//My answer:

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
//console.log(oddLengths(arr)); // => [1, 5, 3]

let length = arr.map(element => element.length);
//console.log(length);

oddLengths = length.filter(function(value) {
  if (value % 2 !== 0) {
    return value;
  }
});

console.log(oddLengths);

//Answer provided:
function oddLengths(strings) {
  let lengths = strings.map((letters) => letters.length);
  let oddLengths = lengths.filter((number) => number % 2 === 1);
  return oddLengths;
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));