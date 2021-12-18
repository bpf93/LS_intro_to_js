//Let's create an add function that returns the sum of two numbers:

function add(a, b) {
  return a + b;
}

add(2, 3);

//in node
/*> function add(a, b) {
  ...   return a + b;
  ... }
  undefined
  >
  > add(2, 3);
  5
*/

//Let's capture the return value in a variable and log it to the console:
let twoAndThree = add(2, 3);
console.log(twoAndThree);