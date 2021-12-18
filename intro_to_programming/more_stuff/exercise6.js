/*
Write a function that searches an array 
of strings for every element that 
matches the regular expression given 
by its argument. The function should 
return all matching elements in an array.

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']


*/
let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function has_lab(strings, pattern) {
  let results = strings.match(/[lab]/g);
  if (results) {
    return results;
  } else {
    console.log('no match')
  }
}

console.log(has_lab(words));


/*
let regex = /lab/g;
let matches = words.match(regex);
console.log(matches);
*/
/*function has_a_or_e(string) {
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
*/