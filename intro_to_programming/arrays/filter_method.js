/* filter is an array iteration method.
It returns a new array that includes all
elements from the calling array for which
the callback returns a truthy value.

> let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2]
> numbers.filter(num => num > 4)
= [ 5, 6, 7, 8, 9, 10 ]

> numbers
= [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2 ]

filter iterates over the elements of the
array. During each iteration, it invokes
the callback function, using the value
of the current element as an argument.
If the callback returns a truthy value,
filter appends the element's value to a
new array. Otherwise it ignore the
element's value and does nothing.
When filter finishes iterating, it
returns the array of selected elements:
the elements for which the callback
returned a truthy value.

filter does not mutate the caller.
*/