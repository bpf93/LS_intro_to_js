/*Add a qux property with value 3 to the myObj object we created in the previous exercise.
*/

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj)

myObj['qux'] = 3;
console.log(myObj);

for (let key in myObj) {
  console.log(key);
}

//Now, examine the following code snippets:
//Snippet 1:
/*let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});
//Snippet 2:
for (let key in myObj) {
  console.log(key);
}
*/
/*Without running this code, can you 
determine whether these two snippets 
produce the same output? Why?

My answer:

Notes:
Object.keys returns the object's own keys.
It does not include any keys from the
prototype objects.

The output of snippet 1 will be [qux].
Once I ran it, printed qux.

for/in iterates over the properties of
an object's prototypes as well.

The output of snippet 2 will be
[foo, bar, qux]
Once I ran it, printed: 
qux
foo
bar

Answer provided:
myObj.qux = 3;
Both snippets iterate over the keys 
of myObj. However, for..in iterates 
over all of the object's keys, 
including those in the prototype 
object, myProtoObj. Thus, snippet 2 
logs:


qux
foo
bar

Snippet 1 iterates solely over 
myObj's "own" properties - that is, 
those defined directly on the object, 
not its prototype. Thus, it logs:


qux

We can add a conditional to snippet 2 
to get the same output from for..in: 
all we need to do is check whether the 
key is myObj's own property:


for (let key in myObj) {
  if (myObj.hasOwnProperty(key)) {
    console.log(key);
  }
}
*/

