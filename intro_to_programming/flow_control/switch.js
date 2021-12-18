let a = 5;

switch (a) {
  case 5:
    console.log('a is 5');
    break;
  case 6:
    console.log('a is 6');
    break;
  default:
    console.log('a is neither 5, nor 6');
    break;
} // => a is 5

//the above example is functionally identical to the following if/else statement:

let a = 5;

if (a === 5) {
  console.log('a is 5');
} else if (a === 6) {
  console.log('a is 6');
} else {
  console.log('a is neither 5, nor 6');
} // => a is 5

//without break keyword:

let a = 5;

switch (a) {
  case 5:
    console.log('a is 5');
  case 6:
    console.log('a is 6');
  default:
    console.log('a is neither 5, nor 6');
} // => a is 5
  //    a is 6
  //    a is neither 5, nor 6

  //However, that doesn't mean that fall-throughs are never appropriate. There are use cases where they work well. For instance, suppose you want to execute the same action for two or more cases:

  let a = 5;

switch (a) {
  case 5:
  case 6:
  case 7:
    // executed if a is 5, 6, or 7
    console.log("a is either 5, 6, or 7");
    break;
  case 8:
  case 9:
    // executed if a is 8 or 9
    console.log('a is 8 or 9');
    break;
  default:
    // executed if a is anything else
    console.log('a is not 5, 6, 7, 8, or 9');
    break;
}

//Technically, this is fall-through, but, since each case executes a single clause, it's safe to use and doesn't suggest a possible error.