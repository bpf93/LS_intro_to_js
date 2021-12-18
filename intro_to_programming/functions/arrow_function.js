//let add = (a, b) => a + b;
let getNumber = (text) => { //when requiring 1 parameter, () are optional and oftentimes omitted.
  let input = prompt(text);
  return Number(input);
};

let number1 = getNumber("Enter a number: ");
let number2 = getNumber("Enter another number: ");
console.log(add(number1, number2));

//Does not work in Node. ReferenceError: prompt is not defined