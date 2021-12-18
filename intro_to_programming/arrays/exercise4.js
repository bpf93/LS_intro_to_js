/*
Let's try another variation on the even-numbers theme.

We'll return to the simpler one-dimensional array. In this problem, we want to use the map function to create a new array that contains one element for each element in the original array. If the element is an even value, then the corresponding element in the new array should contain the string 'even'; otherwise, the element in the new array should contain 'odd'.
*/

//My answer:

let myArray = [1, 3, 6, 11, 4, 2,
  4, 9, 17, 16, 0];
let evensAndOdds = myArray.map(function(element) {
  if (element % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
});

console.log(evensAndOdds);

/*Answer provided:

//using map method:
let newArray = myArray.map(function(value) {
  if (value % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
});

//using for loop:
let newArray = []
for (let i = 0; i < myArray.length; i += 1) {
  let value = myArray[i];
  if (value % 2 === 0) {
    newArray.push('even');
  } else {
    newArray.push('odd');
  }
}

*/