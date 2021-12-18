/*
JavaScript can coerce any value to a boolean value, and that's what it does in conditional contexts like the if statement.

For instance, you can write code like this:
*/


a = 5
if (a) {
  console.log("how can this be true?");
} else {
  console.log("it is not true");
}
//logs "how can this be true?"... JavaScript coerces the value 5 to true

b = 0
if (b) {
  console.log("how can this be true?");
} else {
  console.log("it is not true");
}
//logs "it is not true" ... JavaScript coerces the value 0 to false


//We can even write code like this:

let x;

if (x = 5) {
  console.log("how can this be true?");
} else {
  console.log("it is not true");
}

//The variable x is assigned to 5, then the assignment's return value (5) is evaluated as a boolean.
//5 evaluates as true when it appears in a boolean expression.