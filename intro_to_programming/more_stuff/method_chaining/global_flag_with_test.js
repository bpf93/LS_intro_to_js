/*
Using /g in conjunction with test can have confusing results. Consider the following code:

let regex = /b/g;
let str = "ababa";

console.log(regex.test(str)); // => true
console.log(regex.test(str)); // => true
console.log(regex.test(str)); // => false

The issue here is the /g flag passed to the regex; JavaScript is going to look for every match in the string. However, test only consumes one of the matches at a time. Since there are two occurrences of b in the string, the first two invocations of test return true. The 3rd invocation, however, returns false since there are no more matches after the first two.

The moral of this story is that mixing /g and test may lead to surprising results. You may be better off using match instead, or don't use /g in the regex (many students use /g when they don't need to). Keep in mind whether you need all matches or just a single match - if you just need a single match, /g is inappropriate.
*/
