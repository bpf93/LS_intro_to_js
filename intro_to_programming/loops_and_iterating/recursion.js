/* 
Suppose you want to know the result of doubling a number, then the result of doubling that number, and so on until the number reaches some 
predefined maximum, such as 50. You might begin with the following function:
*/

function doubler(number) {
  console.log(number * 2);
}

//You can use it like this, stopping when you get a result greater than 50.

> doubler(1)     // => 2
> doubler(2)     // => 4
> doubler(4)     // => 8
> doubler(8)     // => 16
> doubler(16)    // => 32
> doubler(32)    // => 64

//That's a bit clumsy, and the code doesn't lend itself to reuse.

//Let's refactor doubler to use recursion instead:

function doubler(number) {
  console.log(number * 2);

  if (number <= 50) {
    doubler(number * 2);
  }
}

doubler(5); // => 5
            // => 10
            // => 20
            // => 40
            // => 80

/* 
Our doubler function code calls itself on line 5. Each invocation of doubler logs a new number, then calls itself with a new value twice 
that of the input number. To make sure the "loop" stops, we skip the recursive call when the number is greater than 50.
*/

/*
Let's create a function that uses recursion to calculate the nth number in the Fibonacci sequence. Each number in this sequence is the sum 
of the previous two numbers in the sequence:

fibonacci(0) = 0
fibonacci(1) = 1
fibonacci(2) = fibonacci(1) + fibonacci(0) = 1 + 0 = 1
fibonacci(3) = fibonacci(2) + fibonacci(1) = 1 + 1 = 2
fibonacci(4) = fibonacci(3) + fibonacci(2) = 2 + 1 = 3
fibonacci(5) = fibonacci(4) + fibonacci(3) = 3 + 2 = 5
fibonacci(6) = fibonacci(5) + fibonacci(4) = 5 + 3 = 8
fibonacci(7) = fibonacci(6) + fibonacci(5) = 8 + 5 = 13
*/

//The key expression needed to solve this problem:

fibonacci(0) = 0 // by definition
fibonacci(1) = 1 // by definition
fibonacci(n) = fibonacci(n - 1) + fibonacci(n - 2) // for all n >= 2


function fibonacci(number) {
  if (number < 2) return number; // 0 if number is 0, 1 if number is 1
  return fibonacci(number - 1) + fibonacci(number -2);
}

console.log(fibonacci(6));  // => 8
console.log(fibonacci(20)); // => 6765

/*
Each time the fibonacci function runs, it recursively invokes itself twice, once with a number 1 less than the current number, and once with a number 2 less than the current number. For instance, let's calculate f(6) by hand. Find the f(6) box in the diagram and follow along:

f(6) returns the value of f(5) + f(4).
f(5) returns the value of f(4) + f(3).
f(4) returns the value of f(3) + f(2).
f(3) returns the value of f(2) + f(1).
f(2) returns the value of f(1) + f(0).
f(1) returns 1. The baseline condition number < 2 tells us this value.
f(0) returns 0. The baseline condition number < 2 tells us this value.
Plug the values from steps 6 and 7 into step 5 to determine that f(2) is 1.
Plug the values from steps 5 and 6 into step 4 to determine that f(3) is 2.
Plug the values from steps 4 and 5 into step 3 to determine that f(4) is 3.
Plug the values from steps 3 and 4 into step 2 to determine that f(5) is 5.
Plug the values from steps 2 and 3 into step 1 to determine that f(6) is 8.

The recursive calls work their way down the tree: f(6) calls f(5) and f(4); 
f(5) calls f(4) and f(3). In the end, we reach the lowest level in the tree 
which always has a 1 or 0 return value in this algorithm. Once it reaches the bottom, 
the code starts adding return values and percolating back up the tree. 
When it works its way back to the top, it returns the final result.

The fact that this code calls itself twice makes it more complicated than most recursive code. 
For instance, we must calculate f(4) twice: once on the left, once on the right. 

Every recursive function has a baseline condition that marks the end of the recursion (number < 2 in our code) 
and some code that recursively calls the function with a new argument. In most cases, the baseline condition 
returns a concrete value that gets reused as the code "unwinds" the recursive calls. Each unwind step uses the
previous return value(s) to calculate an intermediate result that gets returned in the next step. 
In our example, the last step evaluates f(6) as f(5) + f(4) which yields 8.*/
