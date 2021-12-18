//Explain why this code logs '510' instead of 15.

console.log('5' + 10);

//implicit type coercion - when a string and another data type are connected via +, the non-string character is forced into a string value and then appended to the other string instead of carrying out a mathematical operation.