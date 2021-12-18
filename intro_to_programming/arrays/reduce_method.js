/*
The reduce method effectively reduces 
the contents of an array to a single value.
You can build forEach, map, and filter 
with reduce, as well as a number of other 
iterative methods defined for Arrays.

reduce takes two arguments: a callback 
function and a value that initializes 
something called the accumulator. In its 
simplest form, the callback function 
takes two arguments: the current value 
of the accumulator and an element from 
the array. It returns a value that will 
be used as the accumulator in the next 
invocation of the callback.

> let arr = [2, 3, 5, 7]
> arr.reduce((accumulator, element) => accumulator + element, 0)
= 17

> arr.reduce((accumulator, element) => accumulator * element, 1)
= 210

The first invocation computes the sum of 
all the values in the array, 
e.g., 2 + 3 + 5 + 7. 
To get us started, we initialize the 
accumulator to 0. Thus, on the first 
invocation of the callback function, 
accumulator is 0 and element is 2. 
The callback returns 2, which becomes 
the new accumulator value when we invoke 
the callback again, this time with the 
element 3. That invocation, in turn, 
returns 5. This process continues until 
the final return value is 17.

The second invocation of reduce computes 
the product of the numbers in the array 
(2 * 3 * 5 * 7), starting out with 1 as 
the accumulator. (If we started with 0 
as the accumulator, the final return 
value would be 0 since 0 times anything 
is 0.)

The reduce function isn't limited to 
computing numbers: you can also use it 
to compute strings, objects, arrays: 
anything. Here's an example with strings:

> let strings = ['a', 'b', 'c', 'd']
> strings.reduce((accumulator, element) => {
...   return accumulator + element.toUpperCase()
... }, '');
= 'ABCD'

reduce does not mutate the caller. 
(It is possible that the callback might 
mutate the caller, but that's 
inadvisable, and not reduce's fault.)

*/



