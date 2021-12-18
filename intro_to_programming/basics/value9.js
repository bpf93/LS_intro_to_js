/*
What will the following code log to the console and why? Don't run it until you have tried to answer.

const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a);


My answer:
Constants are block-scoped. The value of a constant can't be
changed via reassignment and can't be redeclared. If a 
constant is an object or array its properties or items 
can be updated or removed.

The const declaration creates a constant whose scope can be 
either global or local to the block in which it is declared.
Global constants do not become properties of the window
object unlike var variables.

An initializer for a constant is required. Must specify it's 
value in the same statement in which it's declared.

All considerations about the TDZ apply both to let and const.

A constant cannot share its name with a function or a variable
in the same scope.

Considering that the variable a was declared as a constant
and constants cannot be reassigned or redeclared, I'm guessing
that the function would throw an error.

Answer provided:
TypeError: Assignment to constant variable.

Discussion
Variables declared by const are block scoped, similar to variables declared by let, but their value cannot be changed through re-assignment. So when we try to re-assign a to a new value on line 4, we get an error.

Note that passing a as an argument to myFunction on line 7 has no effect, as the function does not declare any parameters. It is an excess argument that is simply ignored in the function body.
*/