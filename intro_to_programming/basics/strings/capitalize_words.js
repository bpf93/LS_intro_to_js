/*Write code that capitalizes the words in the string 
'launch school tech & talk', so that you get the string 
'Launch School Tech & Talk'.


*/

/*break string into substrings in array separated by space
*/

//My answer (cleaned up after watching video):
let string = 'launch school tech & talk'

let strArr = string.split(' '); //[ 'launch', 'school', 'tech', '&', 'talk' ]

let cap = [];

strArr.forEach(item => {

  cap.push(item.replace(item[0], item[0].toUpperCase()));
  
});

console.log(cap.join(' '));


/* //Mess #1
//let cap = ''

strArr.forEach(item => {
  //let cap = '';
  item = item.replace(item[0], item[0].toUpperCase());
  let capArr = item.split().join();
  //cap.push(item).join(',');
  console.log(capArr);
});


//console.log(cap);
*/

/*
> let word = 'hi';
undefined
> word.replace(word[0], word[0].toUpperCase())
'Hi'
> let cap = word.replace(word[0], word[0].toUpperCase())
*/

/*Answer provided:

let string = 'launch school tech & talk';
let words = string.split(' ');
let capitalizedWords = [];

for (let i = 0; i < words.length; i++) {
  let word = words[i];

  capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
}

capitalizedWords.join(' '); // 'Launch School Tech & Talk'

Discussion
In our solution, we capitalize one word after the other. We use string.split(' ') to split the input string into words, then iterate over these words, collecting their capitalized version in the array capitalizedWords, and finally join the capitalized words into the final string.

Capitalization of a word can be achieved by taking the first character (word[0]), transform it to upper case, and then concatenate it with the rest of the word (word.slice(1)). If we come across a word that is only one character long, word.slice(1) is the empty string. This is case for &. Note that '&'.toUpperCase() returns '&' (as would '&'.toLowerCase()), because '&' does not distinguish upper and lower case.
*/