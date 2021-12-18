/*
Write code that does the reverse, 
starting from a nested array of pairs 
and building an object.

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }
*/

//My answer:

//via built-in method:
let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

let obj = Object.fromEntries(nestedArray);
console.log(obj);

//via for loop:
let person = {};

for (element = 0; element < nestedArray.length; element += 1) {
  let dividedArrays = nestedArray[element];
  let keys = dividedArrays[0];
  let values = dividedArrays[1];
  person[keys] = values;
}

console.log(person);

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

/*
I want to extract elements 0 - 2 from the
nestedArray, make them key-value pairs, and push them into the person
object.

How to extract the elements?
Using for loop?

How to make them into key-value pairs?
Match the value at the appropriate index
to the key and value?

keys = nestedArray[0][0], [1][0], [2][0]
values = nestedArray[0][1], [1][1], [2],[1]

*/

/*
Answer provided:

let person = {};

for (let i = 0; i < nestedArray.length; i++) {
  let pair = nestedArray[i];

  person[pair[0]] = pair[1];
}

console.log(person);
// { title: 'Duke', name: 'Nukem', age: 33 }

Alternative Solution:

let person = Object.fromEntries(nestedArray);
console.log(person);
// { title: 'Duke', name: 'Nukem', age: 33 }
*/

