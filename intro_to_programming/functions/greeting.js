/*
//Global variable
let greetingMessage = "Good morning!";
console.log(greetingMessage);
*/
//The variable greetingMessage is a global variable in the example above.

/*
let greetingMessage = "Good morning";

function greetPeople() {
  console.log(greetingMessage);
}

greetPeople();
*/

//The above example still does the same thing as the 1st example, but we're using the global variable greetingMessage inside of our function.

let greetingMessage = "Good morning!";

function greetPeople() {
  console.log(greetingMessage);
}

function changeGreetingMessage(newMessage) {
  greetingMessage = newMessage;
}

changeGreetingMessage("Good evening");
greetPeople();

//changeGreetingMessage has reassigned greetingMessage.