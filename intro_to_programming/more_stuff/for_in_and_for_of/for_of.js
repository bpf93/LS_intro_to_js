/*A more direct way to iterate over 
the values in an array is to use for/of:
*/

let arr = [ 10, 20, 30 ]
for (let value of arr) {
  console.log(value);
}
// Output:  10
//          20
//          30

/*
for/of is similar to for/in, but 
it iterates over the values of 
any "iterable" collection. For 
our purposes, the only iterable 
collections are arrays and strings. 
Let's see what happens when we pass 
a string to for/of:
*/

let str = "abc";
for (let char of str) {
  console.log(char);
}
// Output: a
//         b
//         c

/*
The for/in statement has been in 
JavaScript since its earliest days, 
so is available in all but a handful 
of ancient JS implementations. The 
for/of statement was added in ES6, 
so is only available in relatively 
modern implementations.


*/