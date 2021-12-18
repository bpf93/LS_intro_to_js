/*You've already met one oddity: 
indexes start at 0. Most programming 
languages use zero-based indexes, so it's 
not too odd. However, learners often 
stumble on this aspect of using arrays.

The length property always returns a 
number that is one greater than the 
greatest used index position of the array. For instance, if an element exists at index position 124 and there are no other elements with greater index values, then the array's length is 125.

Arrays are objects, which we'll meet in 
the next chapter. One side effect of 
this is that the typeof operator doesn't 
return 'array' when applied to an array:

> let arr = [1, 2, 3]
> typeof arr
= 'object'
If you really need to detect whether a 
variable references an array, you need 
to use Array.isArray instead:

> let arr = [1, 2, 3]
> Array.isArray(arr)
= true
If you change an array's length property 
to a new, smaller value, the array gets 
truncated; JavaScript removes all 
elements beyond the new final element.

If you change an array's length property 
to a new, larger value, the array expands 
to the new size. The new elements do not 
get initialized, which leads to some 
strange behavior:

> let arr = []
> arr.length = 3
> arr
= [ <3 empty items> ]

> arr[0]
= undefined

> arr.filter(element => element === undefined)
= []

> arr.forEach(element => console.log(element)) // no output
= undefined

> arr[1] = 3
> arr
= [ <1 empty item>, 3, <1 empty item> ]

> arr.length
= 3

> arr.forEach(element => console.log(element))
= undefined

> Object.keys(arr)
= ['1']
In general, JavaScript treats unset array 
elements as missing, but the length 
property includes the unset elements.

You can create array "elements" with 
indexes that use negative or non-integer 
values, or even non-numeric values:

> arr = [1, 2, 3]
= [ 1, 2, 3 ]

> arr[-3] = 4
= 4

> arr
= [ 1, 2, 3, '-3': 4 ]

> arr[3.1415] = 'pi'
= 'pi'

> arr["cat"] = 'Fluffy'
= 'Fluffy'

> arr
= [ 1, 2, 3, '-3': 4, '3.1415': 'pi', cat: 'Fluffy' ]

These "elements" aren't true elements; 
they are properties on the array object, 
which we'll discuss later. Only index 
values (0, 1, 2, 3, and so on) count 
toward the length of the array.

> arr.length
= 3
Since arrays are objects, you can use 
the Object.keys method to return an 
array's keys -- its index values -- as 
an array of strings. Even negative, 
non-integer, and non-numeric indexes 
are included.

> arr = [1, 2, 3]
> arr[-3] = 4
> arr[3.1415] = 'pi'
> arr["cat"] = 'Fluffy'
> arr
= [ 1, 2, 3, '-3': 4, '3.1415': 'pi', cat: 'Fluffy' ]

> Object.keys(arr)
= [ '0', '1', '2', '-3', '3.1415', 'cat' ]

One quirk of this method is that it 
treats unset values in arrays differently 
from those that merely have a value of 
undefined. Unset values are created when 
there are "gaps" in the array; they show 
up as empty items until you try to use 
their value:

> let a = new Array(3);
> a
= [ <3 empty items> ]

> a[0] === undefined;
= true

> let b = [];
> b.length = 3;
> b
= [ <3 empty items> ]

> b[0] === undefined;
= true

> let c = [undefined, undefined, undefined]
> c
= [ undefined, undefined, undefined ]

> c[0] === undefined;
= true

While the length property of Array 
includes unset values in the count, 
Object.keys only counts those values that 
have been set to some value:

> let aKeys = Object.keys(a)
> a.length
= 3
> aKeys.length;
= 0

> let bKeys = Object.keys(b)
> b.length
= 3
> bKeys.length;
= 0

> let cKeys = Object.keys(c)
> c.length
= 3
> cKeys.length;
= 3

It's worth spending some time and effort 
to memorize these behaviors.
*/