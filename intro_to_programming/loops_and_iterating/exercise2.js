/* 
Write a function that computes and returns
the factorial of a number by using a 
for loop. The factorial of a positive 
integer n, signified by n!, is defined as 
the product of all integers 
between 1 and n, inclusive:

n!	Expansion	Result
1!	1	1
2!	1 * 2	2
3!	1 * 2 * 3	6
4!	1 * 2 * 3 * 4	24
5!	1 * 2 * 3 * 4 * 5	120

You may assume that the argument is always 
a positive integer.


*/

function factorial(number) {
  let result = 1;
  for (let counter = number; counter > 0; counter -= 1) {
    result *= counter;
  }

  return result;
}

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320

result = 1
counter = 1
1 < 0
counter = 1 - 1
counter = 0
result = 1 * 

/*
I wasn't understanding how the call stack went..
Notes on factorial of 4:

factorial(4)
result = 1
counter = 4, 4 > 0
result = 1 * 4 = 4
counter = 4 -1 = 3
factorial(3)
result = 4
counter = 3, 3 > 0
result = 4 * 3 = 12
counter = 3 - 1 = 2
factorial(2)
result = 12
counter = 2, 2 > 0
result = 12 * 2 = 24
counter = 2 - 1 = 1
factorial(1)
result = 24;
counter = 1, 1 > 0
result = 24 * 1 = 24
counter = 1 -1 = 0
factorial(0)
result = 24
counter = 0, 0 !> 0 >> execution stops
return result = 24

Main question is, after the for loop iteration,
do I go straight down to return result(w/in
function), or do I go straight to plugging
the new number into the factorial function, only
return the result after I reach a point where
the condition stops being true (when I reach 0)?
I assume I have to return the result at the
end of each iteration. That's how the result
is being reassigned for each recursive call
I assume. I just don't know concretely.
*/
