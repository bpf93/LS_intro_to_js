/*Use reduce to compute the sum of the 
squares of all of the numbers in an 
array:
*/
//My answer:

let arr = [3, 5, 7];

function sumOfSquares(array) {
let squares = array.map(element => element * element);
return squares.reduce((accumulator, value) => accumulator + value, 0);
}

console.log(sumOfSquares(arr));

//Answer provided:
function sumOfSquares(numbers) {
  return numbers.reduce((accumulator, number) => {
    return accumulator + number * number;
  }, 0);
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83
