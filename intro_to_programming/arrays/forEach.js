/*
To use forEach, you need a callback 
function that you pass to forEach as an 
argument. A callback function is a 
function that you pass to another 
function as an argument. The called 
function invokes the callback function 
when it runs. The forEach method invokes 
its callback once for each element, 
passing it the element's value as an 
argument. forEach always returns undefined.
*/

let array = [1, 2, 3];
array.forEach(function(num) {
  console.log(num); // on first iteration  => 1
                    // on second iteration => 2
                    // on third iteration  => 3
}); // returns `undefined`

//forEach method used to log all the
//even values from myArray to the console
//for nested array:

let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray.forEach(function(nestedArray) {
  nestedArray.forEach(function(value) {
    if (value % 2 === 0) {
      console.log(value);
    }
  });
});