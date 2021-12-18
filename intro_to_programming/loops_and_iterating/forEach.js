//Using the forEach method for arrays:

let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];

names.forEach(function(name) {
  console.log(name);
});

/*
Note we seem to be  passing a function definition as an argument to forEach.
The function definition is, in fact, a function expression.
This function expression doesn't have a name: it's an anonymous function.
Remember that JavaScript has first-class functions..
Meaning functions are values: you can assign them to variables, pass them around as arguments to other functions, and even use them as return values in other functions.
In our example, we're passing the anonymous function as an argument to forEach.
forEach loops through each element in an array, in sequence, starting with the first element. For each name, forEach invokes the anonymous function with the name 
as an argument. The anonymous function can do whatever it needs to do with the argument. In this case, it merely logs the name.*/

//We can make the code more concise by using an arrow function:

let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];

names.forEach(name => console.log(name));