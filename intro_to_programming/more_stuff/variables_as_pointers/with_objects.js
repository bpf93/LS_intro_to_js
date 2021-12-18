//How variables and objects relate:

/*we declare a variable named obj, 
and initialize it to { a: 1 }, 
which is an object value. Line 2 
reassigns obj to a new object, 
{ b: 2 }. Finally, on line 3, 
we mutate the object currently 
referenced by obj by adding a new 
property to the object.
*/

let obj = { a: 1 };
obj = { b: 2 };
obj.c = 3;

/*
creating new variables causes 
JavaScript to allocate a spot 
somewhere in its memory for the 
value. However, with objects, 
JavaScript doesn't store the value 
of the object in the same place. 
Instead, it allocates additional 
memory for the object, and places 
a pointer to the object in the space 
allocated for the variable. Thus, 
we need to follow two pointers to 
get the value of our object from its 
variable name.
*/

//Using arrays:

> let c = [1, 2]
> let d = c
> c = [3, 4]
> c
= [ 3, 4 ]

> d
= [ 1, 2 ]

/*
We can assume that variables c and d 
end up with the same value after line 2 
runs. Reassigning c on line 3 creates a 
new array, but the code doesn't affect 
the value of d. The two variables 
reference different arrays.

This code works as expected since 
reassignment changes the pointer 
value of c to reference the new [3, 4] 
object. Though d originally had the 
same pointer value as c, it was stored 
in a different memory location 
(the location of d). Thus, when we 
reassign c, we're not changing d -- 
it still points to the original array.

As with primitive values, this is 
straightforward: each variable has a 
value, and reassigning values does not 
affect any other variables that happen 
to have the same value. Thus, c and d 
are independent variables.

*/

//With a mutating operation:

> let e = [1, 2]
> let f = e
> e.push(3, 4)
> e
= [ 1, 2, 3, 4 ]

> f
= [ 1, 2, 3, 4 ]

/*The use of pointers has a curious 
effect when you assign a variable that 
references an object to another 
variable. Instead of copying the 
object, JavaScript only copies 
the pointer. Thus, when we 
initialize f with e, we're making 
both e and f point to the same 
array: [1, 2]. It's not just the 
same value, but the same array in 
the same location in memory. The 
two variables are independent, but 
since they point to the same array, 
that array is dependent on what you 
do to both e and f.

With e and f pointing to the same 
array, line 3 uses the pointer in 
the e variable to access and mutate 
the array by appending 3 and 4 to its 
original value. Since f also points 
to that same array, both e and f 
reflect the updated contents of the 
array. Some developers call this 
aliasing: e and f are aliases for 
the same value.

Okay, that's good. What happens if we 
mutate a primitive value? Oops! 
You can't do that: all primitive 
values are immutable. Two variables 
can have the same primitive value. 
However, since primitive values are 
stored in the memory address 
allocated for the variable, they 
can never be aliases. If you give 
one variable a new primitive value, 
it doesn't affect the other.
*/

/*If you've followed along so far, 
you may think that reassignment never 
mutates anything. As the following 
code demonstrates, however, 
that isn't always true:
*/

> let g = ['a', 'b', 'c']
> let h = g
> g[1] = 'x'
> g
= [ 'a', 'x', 'c' ]

> h
= [ 'a', 'x', 'c' ]

/*
Don't let this confuse you. 
The key thing to observe here is 
that we're reassigning a specific 
element in the array, not the array 
itself. This code doesn't mutate the 
element, but it does mutate the array. 
Reassignment applies to the item 
you're replacing, not the object 
or array that contains that item.
*/