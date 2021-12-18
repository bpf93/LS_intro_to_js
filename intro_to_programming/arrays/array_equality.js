/*What do you think the following expression returns?

Copy Code
> [1, 2, 3] === [1, 2, 3]
A reasonable answer is that it returns true. After all, the arrays look identical. JavaScript, however, isn't reasonable in this case: the expression returns false.

Copy Code
> [1, 2, 3] === [1, 2, 3]
= false
How about the following comparison?

Copy Code
> let a = [1, 2, 3]
> let b = a
> a === b
Curiously, this comparison evaluates as true. What's happening here?

JavaScript treats two arrays as equal only when they are the same array: they must occupy the same spot in memory. This rule holds for JavaScript objects in general; objects must be the same object. For this reason, the second example returns true while the first one returns false. Assigning a to b makes b refer to the same array as a; it doesn't create a new array.

If that last paragraph confused you, come back to this section after you've read Variables as Pointers in the More Stuff chapter. If you want, you can even read it now.

It's important to realize that the previous discussion concerns arrays (and other JavaScript objects). The situation with primitive values is different and less surprising.

At first glance, you might say that the arrays in the first example are also "the same array," but they're not. They're two different arrays that happen to have the same values. However, they occupy distinct positions in memory, so they aren't the same array, and thus aren't equal.

Given this behavior, how do you check whether two arrays have the same elements? One option is to create a function that compares the elements of one array with the corresponding elements in the other:

array_equality.jsCopy Code
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

console.log(arraysEqual([1, 2, 3], [1, 2, 3]));    // => true
console.log(arraysEqual([1, 2, 3], [4, 5, 6]));    // => false
console.log(arraysEqual([1, 2, 3], [1, 2, 3, 4])); // => false
arraysEqual takes two arrays and returns false when an element in one array doesn't equal the corresponding element in the other. Otherwise, it returns true. It returns false right away if the arrays have different lengths; taking care of this case first simplifies the rest of the function.

arraysEqual works best when all elements in both arrays are primitive values. If any pair of elements has a non-primitive value (an array or object), arraysEqual might not return the result you expect:

Copy Code
> arraysEqual([1, 2, [3, 4], 5], [1, 2, [3, 4], 5])
= false
*/