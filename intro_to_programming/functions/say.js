/* In this example, we have to use console.log() each time we want to print something.
console.log("hello");
console.log("hi");
console.log("how do you do");
console.log("Quite all right");
*/

//updated code:
/*
function say(words) {
  console.log(words);
};

say("hello");
say("hi");
say("how are you");
say("I'm fine");
*/

//If we wanted to add a "!" to every string we send to say, we can alter a line of code in the function instead of changing each string one by one.

function say(words) {
  console.log(words + "!");
};

say("hello");
say("hi");
say("how are you");
say("I'm fine");