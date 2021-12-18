

let arr = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
/*
function findIntegers(array) {
  for (let i = 0; i < array.length; i += 1) {
    let value = array[i]; 
  if (Number.isInteger(value)) {
    arr.filter(function (value) {
      return value;
    });
  }
  }
  }

let integers = findIntegers(arr)

console.log(integers);*/

/*My answer:
let arr = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

function findIntegers(array) {
return array.filter(function (value) {
for (let i = 0; i < array.length; i += 1) {
if (Number.isInteger(value)) {
return value;
}
}
});
}

integers = findIntegers(arr)
console.log(integers);
*/


function findIntegers(array) {
  return array.filter(function(element) {
    return Number.isInteger(element);
  });
}

integers = findIntegers(arr)
console.log(integers);
//*/