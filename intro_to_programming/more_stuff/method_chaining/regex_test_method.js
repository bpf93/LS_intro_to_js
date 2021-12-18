/*
A regex looks like a string written 
between a pair of forward-slash 
characters instead of quotes, e.g., 
/bob/. You can place any string you 
want to match between the slashes, 
but certain characters have special 
meanings.

JavaScript uses RegExp objects to store 
regex: note the spelling and case. 
Like other objects, RegExp objects 
can invoke methods.

The method test, for instance, 
returns a boolean value based on 
whether a string argument matches the 
regex. Here's how we can use test to 
determine whether the string "bobcat" 
contains the letter o or l:

> /o/.test('bobcat')
= true

> /l/.test('bobcat')
= false

ou can use these boolean values to 
perform some operation depending on 
whether a match occurs:

if (/b/.test('bobcat')) {
  // this branch executes since 'b' is in 'bobcat'
  console.log("Yes, it contains the letter 'b'");
} else {
  // this branch does not execute since 'bobcat' contains 'b'
  console.log("No, it doesn't contain the letter 'b'");
}

Boolean values sometimes don't provide 
enough information about a match. 
That's when the match method for 
strings comes in handy (see match_method.js).

*/