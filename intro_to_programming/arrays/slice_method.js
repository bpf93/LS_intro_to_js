//The slice method—not the splice method you met earlier—extracts and returns a portion of the array. It takes two optional arguments. The first is the index at which extraction begins, while the second is where extraction ends:

> let fruits = ['mango', 'orange', 'banana', 'pear', 'apple']
> fruits.slice(1, 3)
= [ 'orange', 'banana' ]

> fruits.slice(2) // second argument defaults to rest of array
= [ 'banana', 'pear', 'apple' ]

> fruits.slice() // no arguments duplicates the array
= [ 'mango', 'orange', 'banana', 'pear', 'apple' ]

//If you omit the second argument, slice returns the rest of the array starting with the index given by the first argument. With the second argument, it returns the elements up to but excluding that index. (Contrast this detail with how splice treats its second argument.) If you don't provide any arguments at all, slice returns a copy of the entire array: that is, it returns a new array with the same elements as the original. That's useful when you need to use a destructive method on an array that you don't want to modify.

//you can use slice with no arguments if you don't want to mutate the original array:

> let numbers = [1, 2, 3, 4]
> let copyOfNumbers = numbers.slice();
> let reversedNumbers = copyOfNumbers.reverse()
> reversedNumbers
= [ 4, 3, 2, 1 ]

> numbers
= [ 1, 2, 3, 4 ]