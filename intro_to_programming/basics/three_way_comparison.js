/*
Write a function that compares the length of two strings. It should return -1 if the first string is shorter, 1 if the second string is shorter, and 0 if they're of equal length, as in the following example:

compareByLength('patience', 'perseverance'); // -1
compareByLength('strength', 'dignity');      //  1
compareByLength('humor', 'grace');           //  0

compareByLength('patience', 'perseverance'); // -1
compareByLength('strength', 'dignity');      //  1
compareByLength('humor', 'grace');           //  0
*/

//My answer:

function compareByLength(string1, string2) {
  if (string1.length < string2.length) {
    return -1;
  } else if (string1.length > string2.length) {
    return 1;
  } else if (string1.length === string2.length) {
    return 0;
  }
}

console.log(compareByLength('patience', 'perseverance')); // -1
console.log(compareByLength('strength', 'dignity'));      //  1
console.log(compareByLength('humor', 'grace'));           //  0

/*
Answer provided:

function compareByLength(str1, str2) {
  if (str1.length < str2.length) {
    return -1;
  } else if (str1.length > str2.length) {
    return 1;
  } else {
    return 0;
  }
}

Discussion
Our solution uses a simple if statement that compares the length of the string arguments.

The kind of comparison we implemented here is called three-way comparison and is often used in sorting algorithms to determine the order of the values that are sorted.
*/