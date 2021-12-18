/*
You may sometimes want to merge two or more objects, i.e., combine the key-value pairs into a single object. The Object.assign static method provides this functionality:
*/

> let objA = { a: 'foo' }
= undefined

> let objB = { b: 'bar' }
= undefined

> Object.assign(objA, objB)
= {a: 'foo', b: 'bar' }

//Object.assign mutates the first object. In the above example, the properties from the objB object get added to the objA object, altering objA permanently in the process:

> objA
= { a: 'foo', b: 'bar' }

> objB
= { b: 'bar' }

/*
Note that objB isn't mutated. If you need
 to create a new object, use an empty 
 object as Object.assign's first 
 argument. Note that Object.assign can 
 take more than two arguments:
*/

> objA = { a: 'foo' }
= undefined

> objB = { b: 'bar' }
= undefined

> Object.assign({}, objA, objB)
= { a: 'foo', b: 'bar' }

> objA
= { a: 'foo' }

> objB
= { b: 'bar' }
