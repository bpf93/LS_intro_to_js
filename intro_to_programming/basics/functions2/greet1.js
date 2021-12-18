/*
How can we alter the function definition of greet so that 
the parameter greeting is assigned a default value of 
'Hello' when no argument is passed to the function invocation?

function greet(greeting) {
  console.log(greeting + ', world!');
}

greet('Salutations'); // logs: Salutations, world!

greet();              // logs: undefined, world!
                      // should log: Hello, world!
*/

//My answer:

function greet(greeting = 'Hello') {
  console.log(greeting + ', world!');
}

greet('Salutations'); // logs: Salutations, world!

greet();              // logs: undefined, world!
                      // should log: Hello, world!
/*
Answer provided:

Same as my answer.

Default parameters are a great way to assign a default value to a parameter. This default value is used in case the parameter is undefined, which is the case if greet is called without an argument.

What happens when we call greet(undefined)?


*/

greet(undefined); // Hello, world!