//Let's improve our previous implementation of evenOrOdd. 
//Add a validation check to ensure that the argument is an integer. If it isn't, the function should issue an error message and return.

/*function evenOrOdd(num) {
  if (num % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
  return Number.isInteger(num);
}

evenOrOdd(21);
*/
//*/
 //Answer provided:
 function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    console.log('Sorry, the value you passed is not an integer');
    return;
  }

  if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

//result
> evenOrOdd(21)
odd
undefined
//*/

