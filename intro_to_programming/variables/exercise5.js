let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);//prints bar

//foo is first declared with let outside of the block. then foo is declared with qux inside of the block. This is not
// reassignment. The variable foo has been declared twice.

/*
Answer provided:
The program logs bar.

Line 1 initializes a variable named foo with the value'bar'. Line 2 starts a block, which creates a new scope for 
let variables. The variable on line 1 is still visible at this point, but line 3 declares a new variable named foo 
that shadows (hides) the variable from line 1. This second variable gets initialized to 'qux', but it goes out of 
scope on line 4 when the block ends. That brings foo from line 1 back into scope, so line 6 logs its value: bar.
 */