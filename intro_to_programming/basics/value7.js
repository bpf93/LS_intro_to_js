/* What will the following code log to the console and why? Don't run it until you have tried to answer.

let a = 1;

function myFunction() {
  console.log(a);
}

myFunction();

My answer:
The variable a in the inner scope of the function has access
to the value of the variable in the outer scope. It will log
1.

Answer provided:
The code logs 1.

Discussion
The variable a declared in the let statement on line 1 is declared at the very top level of our code, so it is accessible from everywhere in the code, including from within the body of myFunction.

*/