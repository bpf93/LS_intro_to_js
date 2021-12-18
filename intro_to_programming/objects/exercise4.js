/*Create an array from the keys of the object obj below, 
with all of the keys converted to uppercase. Your 
implementation must not mutate obj.
*/

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

//My answer:
let newObj = Object.keys(obj);
console.log(newObj);

let upperCaseKeys = newObj.map(property => property.toUpperCase());
console.log(upperCaseKeys);

console.log(obj);

//Answer provided:
//using Object.keys and map method:
let objKeys = Object.keys(obj);
let upperKeys = objKeys.map((key) => key.toUpperCase());
console.log(upperKeys); // => [ 'B', 'A', 'C' ]
console.log(obj); // => { b: 2, a: 1, c: 3 }

//using forEach:
let upperKeys = [];
let objKeys = Object.keys(obj);
objKeys.forEach(function(key) {
  upperKeys.push(key.toUpperCase());
});
console.log(upperKeys); // => [ 'B', 'A', 'C' ]