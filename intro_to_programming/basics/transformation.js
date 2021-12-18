/*
Use JavaScript's string methods on the string 'Captain Ruby' to produce the string 'Captain JavaScript'.


*/

//My answer:

console.log('Captain Ruby'.replace(/Ruby/, 'Javascript'));

/*Answer provided:
'Captain Ruby'.replace('Ruby', 'JavaScript');

Discussion
There is more than one way to achieve this. Arguably the most straightforward one is to use the String.prototype.replace() method. Another possibility is to extract the first part of the input string, 'Captain', and concatenate it with 'JavaScript'. For example:

'Captain Ruby'.substring(0, 8) + 'JavaScript';

or:

'Captain Ruby'.split(' ')[0] + ' JavaScript';
*/