//Will an error occur if you try to access an array element with an index that is greater than or equal to the length of the array? For example:

> let foo = ['a', 'b', 'c'];
undefined
> console.log(foo.length);
3
undefined
> console.log(foo[3]);
undefined
undefined

//no error, just prints undefined and also returns undefined.