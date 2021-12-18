/* 
The Object.keys static method returns 
an object's keys as an array. 
You can iterate over that array using 
any technique that works for arrays.
 
For instance:

*/
let person = {
  name: 'Bob',
  age: 30,
  height: '6 ft'
};

let personKeys = Objects.keys(person);
console.log(personKeys); // => ['name', 'age', 'height']
personKeys.forEach(key => {
  console.log(person[key])
}); // => Bob
    //    30
    //    6 ft