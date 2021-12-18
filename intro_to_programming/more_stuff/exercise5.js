//What does the following function do?

function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

/*My answer:
The function takes a string,
divides it into an ordered list of 
substrings, and puts them into an array,
and then returns the array.
The string is divided wherever there is
a space present.

The reverse method makes the first reverses
the order of the elements in the array.
The first array element becomes the last
and the last becomes the first, and so on
with the element in between.

The map method creates a new array with
the numbers the refer to the length of 
each element in the calling array.

Long story short, it takes a string(s),
divides it up wherever there is a space
present into substrings, puts the sub-
strings into an array, reverses the
order of the elements in the array, 
and then creates a new array of length
values of each substring.

Answer provided:
This code converts a string into an array of words, reverses that array, and then returns a new array that contains the lengths of the words. It assumes that a single space character delimits the words in the original string.

Thus:

console.log(doSomething("Pursuit of happiness")); // => [ 9, 2, 7 ]
*/