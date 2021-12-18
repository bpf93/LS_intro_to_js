//Will this program produce an error when run? Why or why not?

const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

//No. It will print FOO that is available on the outside scope. The other variable is only accessible within
// the block's scope and is ignored on the outer scope, so the 2 will not clash and produce an error.


/*
Answer provided:
For much the same reason as the previous exercise, this program doesn't raise an error, and it logs bar on line 6. 
One key difference, though, is that we are using const instead of let, which may have led you to believe an error would 
occur on line 3. However, since the two const variables are separate entities, no error occurs.
*/