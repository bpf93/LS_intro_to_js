/*
We've been given an array of vocabulary words grouped into 
sub-arrays by meaning. This is a two-dimensional array or a 
nested array. Write some code that iterates through the 
sub-arrays and logs each vocabulary word to the console.

let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

// Expected output:
// happy
// cheerful
// merry
// etc...
*/
let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

//My answer:
//console.log(vocabulary[0][0]);

  
  for (let element = 0; element < vocabulary.length; element += 1) {
    
    for (let index = 0; index < vocabulary[element].length; index += 1) {
      console.log(vocabulary[element][index]);
  }
  
}

/*
//Notes:
for each element in the array vocabulary I want to print out the values
for each index until I reach the end of that element 
(element.length - 1)
then I want to print out the values of the next element.
so on until I've printed the contents of all the elements 
(vocabulary.length - 1)

vocabulary.forEach(element => {
  let index1 = 0
})

for (let element = 0; let index = 0; index < element.length ; index += 1) {
  console.log(vocabulary[element][index]);
}
*/

/*Answer provided:
let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

for (let vocabularyIdx = 0; vocabularyIdx < vocabulary.length; vocabularyIdx++) {
  let synonyms = vocabulary[vocabularyIdx];

  for (let synonymIdx = 0; synonymIdx < synonyms.length; synonymIdx++) {
    console.log(synonyms[synonymIdx]);
  }
}

Discussion
Our solution uses nested for loops to iterate through each sub-array of the vocabulary array. We access each inner element by its index on line 11, and output it using console.log().

*/



