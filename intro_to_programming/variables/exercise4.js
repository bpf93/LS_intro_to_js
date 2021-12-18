//What happens when you run the following code? Why?

const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

Good Morning, Victor
Good Afternoon, Victor
Good Evening, Victor
/home/bpf93/intro_to_js/intro_to_programming/variables/exercise4.js:8
NAME = 'Joe';
     ^

TypeError: Assignment to constant variable.

//you cannot reassign the value of constants.