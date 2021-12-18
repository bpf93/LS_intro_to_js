/*
Exception handling is a process that deals with errors in a manageable and predictable manner.

JavaScript's try/catch statement provides the means to handle exceptions. The basic structure looks like this:

try {
  // perform an operation that may produce an error
} catch (exception) {
  // an error occurred. do something about it.
  // for example, log the error
} finally {
  // Optional 'finally' block; not used often
  // Executes regardless of whether an exception occurs.
}

One common JavaScript error occurs when we call a method on the values undefined or null.

let names = ['bob', 'joe', 'steve', undefined, 'frank'];
names.forEach(name => {
  console.log(`${name}'s name has ${name.length} letters in it.`);
}); // => bob's name has 3 letters in it.
    //    joe's name has 3 letters in it.
    //    steve's name has 5 letters in it.
    //    TypeError: Cannot read property 'length' of undefined
    //        at names.forEach (repl:2:42)
    //        at Array.forEach (<anonymous>)

This program raises an error when it tries to access the length property on the undefined value at names[3]. It then prints a stack trace and halts program execution; it ignores the last entry in the array.

Let's add some exception handling to this program:

let names = ['bob', 'joe', 'steve', undefined, 'frank'];

names.forEach(name => {
  try {
    console.log(`${name}'s name has ${name.length} letters in it.`);
  } catch (exception) {
    console.log('Something went wrong');
  }
}); // => bob's name has 3 letters in it.
    //    joe's name has 3 letters in it.
    //    steve's name has 5 letters in it.
    //    Something went wrong
    //    frank's name has 5 letters in it.

Don't try to catch every possible exception. If you can't do anything useful with the exception, let it go. Mishandling an exception is usually far more catastrophic than just letting the program fail.
*/