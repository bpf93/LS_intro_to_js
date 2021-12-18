//What happens when you run the following program? Why do we get that result?

{
  let foo = 'bar';
}

console.log(foo); //ReferenceError: foo is not defined

//foo is defined within the code block's scope which it is limited to. it must be defined outside of the code block's scope in order to be used outside of the block.