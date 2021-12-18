/*
Determine the output that the following code will log to the console.

function multiplesOfThree() {
  let divisor = 1;

  for (let dividend = 3; dividend <= 30; dividend += 3) {
    console.log(dividend + ' / ' + divisor + ' = 3');
    divisor += 1;
  }
}

multiplesOfThree;

My answer:
print all the multiples of 3:

divisor 1
dividend 3

3/1=3

divisor 2
dividend 6

6/2=3

so on until the dividend = 30
30/10=3

Answer provided:
There will be no output, because the function multiplesOfThree is not invoked.

To invoke the function, we should append parentheses to the function name on line 10, like so:

multiplesOfThree();


*/

