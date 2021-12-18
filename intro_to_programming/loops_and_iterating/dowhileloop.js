let answer;
do {
  answer = prompt("Do you want to do that again?");
} while (answer === 'y');

//Let's rewrite the names program (from loopingoverarrayswithwhile.js) with a for loop to better illustrate the difference (between while and for loops):



let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];

for (let index = 0; index < names.length; index += 1) {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
}

console.log(upperNames); // => ['CHRIS', 'KEVIN', 'NAVEED', 'PETE', 'VICTOR']

/* 

When JavaScript runs this loop, it follows this sequence:

1. Declare and initialize the index variable to 0.
2. If index is not less than the array length, go to step 6.
3. Execute the loop body.
4. Increment index.
5. Go back to step 2.
6. Log the results.
*/