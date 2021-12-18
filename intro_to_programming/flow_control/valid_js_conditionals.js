//The examples below are all valid JavaScript conditionals.

//Example 1 demonstrates the simplest if statement: it has a single condition (x === 3)
//and a single clause - a block, statement, or expression - that executes when the condition is true.
if (x === 3) {                          // Example 1
  console.log("x is 3");
}

//Example 2 demonstrates that you can handle both true and false conditions in the same if statement by using an
//else clause. The else clause is not a separate statement: it's part of he if statement.

if (x === 3) {                          // Example 2
  console.log("x is 3");
} else {
  console.log("x is NOT 3");
}

//Examples 3, 4, and 5 demonstrate that you don't need a block when the if or else clause contains a single
//statement or expression. You need braces for a block when you want to execute multiple statements or expressions in a clause.
//However omitting the braces can cause issues and thus should be avoided in most cases.

if (x === 3) console.log("x is 3");     // Example 3

if (x === 3)                            // Example 4
  console.log("x is 3");

if (x === 3)                            // Example 5
  console.log("x is 3");
else
  console.log("x is NOT 3");

  //Examples 6 and 7 behave the same way. Example 6 uses a nested if statement in the else clause while example 7 shows the
  //result of removing the block. else if is one place where omitting the block is preferable.
  //It's easier to read and maintain example 7 since you don't have the syntactic clutter of extra braces and indentation.

if (x === 3) {                          // Example 6
  console.log('x is 3');
} else {
  if (x === 4) {
    console.log('x is 4');
  } else {
    console.log('x is NOT 3 or 4');
  }
}

if (x === 3) {                          // Example 7
  console.log("x is 3");
} else if (x === 4) {
  console.log("x is 4");
} else {
  console.log('x is NOT 3 or 4');
}

