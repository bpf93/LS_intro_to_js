/*
What will the following code log to the console and why? 
Don't run it until you have tried to answer.

console.log(greeting);

var greeting = 'Hello world!';

My answer:
The greeting has been assigned a value on a global scope
and so 'Hello World!' will be printed to the console.

Answer provided:

The code logs undefined.

Discussion
All variables in JavaScript declared with var are hoisted, meaning they are virtually moved to the beginning of the scope. This means that our code snippet above behaves like the following one:

var greeting;

console.log(greeting);

greeting = 'Hello world!'

When a var variable is declared but not assigned a value, like on line 1, it is initialized to the value undefined. For that reason, the code logs undefined to the console.

*/

console.log(greeting);

let greeting = 'Hello world!';

//returns an error. ReferenceError: Cannot access 'greeting' before initialization
