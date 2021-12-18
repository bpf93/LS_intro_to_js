//Log all of the even values from myArray 
//to the console.

let myArray = [1, 3, 6, 11, 4, 2,
  4, 9, 17, 16, 0];

myArray.filter(function(n) {
  if (n % 2 === 0) {
    console.log(n);
  }
});

/* The above is my answer.
Provided answer:

for (let i = 0; i < myArray.length; i += 1) {
  let value = myArray[i];
  if (value % 2 === 0) {
    console.log(value);
  }
}

Our approach is straightforward: we iterate over all the elements in the array and check whether each element is even. You can also use forEach and let JavaScript take care of the indexing:

myArray.forEach(function(value) {
  if (value % 2 === 0) {
    console.log(value);
  }
});

*/