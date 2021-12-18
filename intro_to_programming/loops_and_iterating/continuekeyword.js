//continue lets you start a new iteration of the loop, while break lets you terminate a loop early.

let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];

for (let index = 0; index < names.length; index += 1) {
  if (names[index] === 'Naveed') {
    continue;
  }

  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
}

console.log(upperNames); // => ['CHRIS', 'KEVIN', 'PETE', 'VICTOR']

//You can rewrite a loop that uses continue with a negated if conditional.

let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];

for (let index = 0; index < names.length; index += 1) {
  if (names[index] !== 'Naveed') {
    let upperCaseName = names[index].toUpperCase();
    upperNames.push(upperCaseName);
  }
}

console.log(upperNames); // ['CHRIS', 'KEVIN', 'PETE', 'VICTOR']

/* 
This code behaves like the version that uses continue.

If we can write looping logic without continue, why bother using it at all? You don't have to use continue, of course, but it often leads to a more elegant solution to a problem.
*/

//Loop 1:
for (let i = 0; i < someNumber; i += 1) {
  if (someCondition) {
    // execute 10 lines
  }
}

//Loop 2:
for (let i = 0; i < someNumber; i += 1) {
  if (someCondition) {
    // some code here
    if (anotherCondition) {
      // some more code here
    }
  }
}

//We can use continue to rewrite those two loops without nesting:

//Loop 1 (with continue):
for (let i = 0; i < someNumber; i += 1) {
  if (!someCondition) continue;
  // execute 10 lines
}

//Loop 2 (with continue):
for (let i = 0; i < someNumber; i += 1) {
  if (!someCondition) continue;
  // some code here

  if (!anotherCondition) continue;
  // some more code here
}