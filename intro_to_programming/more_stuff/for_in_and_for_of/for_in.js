/*
The for/in statement iterates over all 
enumerable properties of an object 
including any properties inherited 
from another object.
*/

let obj = { foo: 1, bar: 2, qux: 'c' };
for (let key in obj) {
  console.log(key);
}
// Output:  foo
//          bar
//          qux

/*
We can use for/in to iterate over 
arrays. However, the results may not 
be exactly what you expect:
*/

let arr = [ 10, 20, 30 ]
for (let value in arr) {
  console.log(value);
}
// Output:  0
//          1
//          2

/*
As you can see, it iterates over the 
index values -- those are the keys 
from the array (as strings!). 
Fortunately, you can use the index 
values to access the values:

*/

let arr = [ 10, 20, 30 ]
for (let index in arr) {
  console.log(arr[index]);
}
// Output:  10
//          20
//          30

/*A more direct way to iterate over 
the values in an array is to use for/of
(see for_of.js).
*/
