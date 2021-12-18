/*
This problem is more challenging than most in this book. Don't worry if you can't solve it on your own.

Write a function similar to the oddLengths function from Exercise 6, but don't use map or filter. Instead, try to use the reduce method.
*/

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

/*My skeletal answer in progress:
function oddLengths(array) {
  integers  = array.reduce((arg1 (acc), arg2 (element)) => if (element % 2 !== 0) {array.push(element[i])}, accvalue) => {
  , []})
  }
  
  Answer provided:
  function oddLengths(strings) {
    return strings.reduce((filteredNumbersArray, letters) => {
      let length = letters.length;
      if (length % 2 === 1) {
        filteredNumbersArray.push(length);
      }
      return filteredNumbersArray;
    }, []);
  }

  let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));
*/