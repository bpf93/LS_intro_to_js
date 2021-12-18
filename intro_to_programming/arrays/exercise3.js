/*
Let's make the problem a little harder. 
In this problem, we're again interested 
in even numbers, but this time the 
numbers are in nested arrays in a single 
outer array.
*/

let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

/*myArray[0] === [1, 3, 6, 11]
myArray[1] === [4, 2, 4]
myArray[2] === [9, 17, 16, 0]
*/

/* my answer:
myArray.forEach(function(n) {
  if (n % 2 === 0) {
    console.log(n);
  }
});
*/

/*answers provided:

for (let i = 0; i < myArray.length; i += 1) {
  for (let j = 0; j < myArray[i].length; j += 1) {
    let value = myArray[i][j];
    if (value % 2 === 0) {
      console.log(value);
    }
  }
}

//the chained brackets in myArray[i][j] make it visually explicit that we're dealing with a two-dimensional nested array.
*/
myArray.forEach(function(nestedArray) {
  nestedArray.forEach(function(value) {
    if (value % 2 === 0) {
      console.log(value);
    }
  });
});

