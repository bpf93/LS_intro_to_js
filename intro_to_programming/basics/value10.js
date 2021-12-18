/*
What will the following code log to the console and why? Don't run it until you have tried to answer.

const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);

My answer:

An object initialized with const can have it's contents altered.
So the function alters the key firstName in the a object.
{firstName: 'Jane', lastName: 'Doe'} will be printed.

Answer provided:

{ firstName: 'Jane', lastName: 'Doe' }

Discussion

The fact that const variables cannot be re-assigned does not mean that the value they hold is immutable. As we see in the example above, objects that are assigned to const variables can be mutated.

*/