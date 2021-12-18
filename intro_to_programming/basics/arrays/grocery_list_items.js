/*
We have made a grocery list, and as we check off items on 
that list, we would like to remove them.

Write code that removes the items from 'groceryList' one by 
one, until it is empty. If you log the elements you remove, 
the expected behavior would look as follows.

let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

// Your code.

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

groceryList; // []
*/

let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

//My answer:
while (groceryList.length > 0) {
  console.log(groceryList.shift());
}

console.log(groceryList);

/* //Brainstorming:
function removeItem(array) {
  for (let idx = 0; idx < array.length; idx += 1) {
    let itemRemoved = array.shift();
    console.log(itemRemoved]);
  }

  console.log(array);
}

console.log(removeItem(groceryList));


/*Task: remove the items from 'groceryList' one by 
one, until it is empty.


log the elements as you remove 

Questions:
How can I remove elements from the groceryList as the length
changes?
Can I prevent the length from changing? Doesn't appear so, at
a quick glance.
*/
/*
let idx = 0

//based on MDN solution:
while( typeof (i = groceryList.shift()) !== 'undefined') {
  console.log(i);
}

console.log(groceryList);
*/

/*Answer provided:

while (groceryList.length > 0) {
  let checkedItem = groceryList.shift();

  console.log(checkedItem);
}

Discussion
The Array.prototype.shift() method removes and returns the first element of the calling array. This method permanently modifies the array, which can be seen by logging groceryList to the console after removing elements.
*/




