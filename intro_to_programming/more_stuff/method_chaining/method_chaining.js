let str = 'Pete Hanson';
let names = str.toUpperCase().split(' ').reverse().join(', ');
console.log(names); // => HANSON, PETE

/*On line 2, we have a long chain of 
method calls. First, we call 
toUpperCase() on the string str, 
which returns 'PETE HANSON'. 
Then we call split(' ') on the 
returned string, which in turn 
returns the array ['PETE', 'HANSON']. 
We then use the array to invoke 
reverse(), which returns a new array, 
['HANSON', 'PETE']. In the last step, 
we join the elements of the array 
together with a comma and space between 
elements, which returns the string 
'HANSON, PETE'.

The main takeaway is that you can call 
a method on the return value of 
another method.

You'll also see several syntactic 
variations on this code:

let str = 'Pete Hanson';
let names = str.toUpperCase()
               .split(' ')
               .reverse()
               .join(', ');
console.log(names);

let str = 'Pete Hanson';
let names = str.toUpperCase()
  .split(' ')
  .reverse()
  .join(', ');
console.log(names);

let str = 'Pete Hanson';
let names = str.toUpperCase().
                split(' ').
                reverse().
                join(', ');
console.log(names);

All of these (and more) are acceptable. 
The main advantage to these 
alternatives is improved readability.


*/

