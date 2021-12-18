/*Create a new object named myObj that 
uses myProtoObj as its prototype.
*/


let myProtoObj = {
  foo: 1,
  bar: 2,
};

//My answer:
let myObj = Object.create(myProtoObj);
console.log(myObj['foo']);
console.log(myProtoObj);
