let bar = 1;
function foo() {
  let bar = 2
}

foo();
console.log(bar);

//code logs 1. bar is defined once as a global variable and once as the local variable of the foo function. when bar is logged outside of the function, the value of the global variable is printed.

//within node:
> let bar = 1;
undefined
> function foo() {
...   let bar = 2
... }
undefined
>
> foo();
undefined
> console.log(bar);
1
undefined

//compare to the following code:
let bar = 1
function foo() {
  bar = 2;
}

foo();
console.log(bar);

//within node:
> let bar = 1
undefined
> function foo() {
...   bar = 2;
... }
undefined
>
> foo();
undefined
> console.log(bar);
2
undefined

//the value of bar is reassigned to 2 within the foo function. console.log prints the new value of 2 which is accessible via the global variable bar which holds the new value of 2.
//provided answer: In this case, console.log would log 2 since bar on line 1 is now in scope within the function. Thus, line 3 changes the global variable bar to 2.