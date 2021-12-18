/*
What will the following code log to the console and why? Don't run it until you have tried to answer.

if (true) {
  let myValue = 20;
}

console.log(myValue);

My answer:

Error.
myValue is not available in the global scope
that console.log() is in. It is locally scoped to the
if statement block.


Answer provided:
ReferenceError: myValue is not defined

Discussion
Variables declared with let are block scoped. This means that when we declare the variable myValue within a block on line 2, that variable is not accessible outside of the block on line 5, and a ReferenceError is raised.

*/