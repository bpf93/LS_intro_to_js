/* Boolean values sometimes don't provide 
enough information about a match. 
That's when the match method for 
strings comes in handy.

This method takes a regex as the 
argument and returns an array that 
describes the match.

> "bobcat".match(/x/)         // No match
= null

> "bobcat".match(/[bct]/g)    // Global match
= [ 'b', 'b', 'c', 't' ]

> "bobcat".match(/b((o)b)/)   // Singular match with groups
= [ 'bob', 'ob', 'o', index: 0, input: 'bobcat', groups: undefined ]


If no match occurs, match returns the 
value null, which conveniently lets us 
use match in conditionals in the same 
way as test.

When a match occurs with a regex that 
contains the /g flag—a global match—the 
match method returns an array that 
contains each matching substring. 
The /g example above returns an 
array consisting of the matched 
b (twice, since it appears twice 
  in the string), c, and t letters

When /g isn't present, the return value 
for a successful match is also an 
array, but it includes some 
additional properties:

index: the index within the string 
where the match begins
input: a copy of the original string
groups: used for "named groups"

The array elements are also a bit 
different when /g isn't present. 
In particular, the first element 
(bob in the above example) 
represents the entire matched part of 
the string. Additional elements 
(ob and o in the example) represent 
capture group matches. Parentheses 
inside a regex define capture groups.

As mentioned above, match returns null 
when a match doesn't occur. You can 
harness this in conditionals:

function has_a_or_e(string) {
  let results = string.match(/[ae]/g);
  if (results) {
    // a non-null return value from match is truthy
    console.log(`We have a match! ${results}`);
  } else {
    // a null return value from match is falsy
    console.log('No match here.');
  }
}

has_a_or_e("basketball"); // => We have a match! a,e,a
has_a_or_e("football");   // => We have a match! a
has_a_or_e("hockey");     // => We have a match! e
has_a_or_e("golf");       // => No match here.

Since match must generate information 
above and beyond a simple boolean 
value, it can have performance and 
memory costs. test is more efficient, 
so try to use it when you don't need 
to know anything other than whether 
the regex matched the string.


*/