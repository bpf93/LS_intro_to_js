/*
forEach works well when you want to use 
the values of an array's elements. 
Suppose, though, that you want to create 
a new array whose values depend on the 
original contents of the array. For 
instance, suppose you want to create a 
new array that contains the squares of 
all the numbers in the calling array. 
With forEach, you might end up with 
something like this:

> let numbers = [1, 2, 3, 4]
> let squares = [];
> numbers.forEach(num => squares.push(num * num));
> squares
= [ 1, 4, 9, 16 ]

> numbers
= [ 1, 2, 3, 4 ]

That works well enough, but the callback 
now has a side effect: it modifies the 
squares variable, which isn't part of 
the callback function. Side effects 
sometimes lead to trouble. Consider what 
happens if you ran the forEach call 
again after running the above code:

> numbers.forEach(num => squares.push(num * num));
> squares
= [ 1, 4, 9, 16, 1, 4, 9, 16 ]

We now have two copies of the squares 
since we forgot to reset squares to an 
empty array.

*/

/*
The map method handles this situation 
more cleanly:

> let numbers = [1, 2, 3, 4]
> let squares = numbers.map(num => num * num);
> squares
= [ 1, 4, 9, 16 ]

> squares = numbers.map(num => num * num);
= [ 1, 4, 9, 16 ]

map returns a new array that contains 
one element for each element in numbers, 
with each element set to the return value 
of the callback: the squares of the 
numbers in this case. This code is more 
compact than the forEach code, and, 
better yet, it has no side effects; the 
callback doesn't update squares (the 
  return value of map does that), and we 
  don't have to reset the variable if we 
  rerun the same code.

The main thing to remember is that 
forEach performs simple iteration and 
returns undefined, while map transforms 
an array's elements and returns a new 
array with the transformed values.





*/
