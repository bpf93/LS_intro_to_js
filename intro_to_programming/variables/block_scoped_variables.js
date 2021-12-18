//since let creates a block-scoped variable; a isn't accessible outside the block.

if (1 === 1) {
  let a = 'foo';
}

console.log(a); // ReferenceError: a is not defined

//The error tells you that a isn't available on line 5. In other words, it isn't in scope outside of the if block.
//If, on the other hand, you declare the variable outside the if block, the variable is available within the block as well as after the block ends.

let a = 'foo';
if (1 === 1) {
  a = 'bar';
}

console.log(a);    // => 'bar'

//a is reassigned within the block.
//Constants declared with const have the same scope as variables declared with let.
//var doesn't use block-scoping.