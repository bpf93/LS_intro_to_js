/*
Write a function that extracts the language code from a 
locale. A locale is a combination of a language code, 
a region, and usually also a character set, e.g en_US.UTF-8.

extractLanguage('en_US.UTF-8');  // 'en'
extractLanguage('en_GB.UTF-8');  // 'en'
extractLanguage('ko_KR.UTF-16'); // 'ko'

*/

//My answer:

function extractLanguage(locale) {
  return locale.substring(0, 2);
}

console.log(extractLanguage('en_US.UTF-8'));  // 'en'
console.log(extractLanguage('en_GB.UTF-8'));  // 'en'
console.log(extractLanguage('ko_KR.UTF-16')); // 'ko'

/*Answer provided:

function extractLanguage(locale) {
  return locale.split('_')[0];
}

// Examples:
console.log(extractLanguage('en_US.UTF-8'));
console.log(extractLanguage('en_GB.UTF-8'));
console.log(extractLanguage('ko_KR.UTF-16'));

Discussion
There are different ways to solve this. Our solution splits the input string at the '_' character, resulting in an array like ['en', 'US.UTF-8'], and then returns the first element of that array.


*/
