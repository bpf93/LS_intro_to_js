//What does the following code log to the console?

function scream(words) {
  words = words + "!!!!";
  return;
  console.log(words);
}

scream('Yipeee');

//My answer:
//the word will be reassigned to concat 4 exclamation marks but it will implicitly return undefined.
//the return statement is on a line of its own and so it is not returning any value.
//Nothing is printed to the console.

/* Corrected:

> function scream(words) {
... return words = words + "!!!!";
... console.log(words);
... }
undefined
> scream('Yipeee');
'Yipeee!!!!' //successfully prints
*/

/* Answer provided:

It doesn't log anything. The return on line 3 terminates the function before it can log anything.
*/