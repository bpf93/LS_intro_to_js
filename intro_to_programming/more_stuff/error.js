function foo() {
  console.log(bar);
}

foo();

//stack trace:
$ node error.js
/Users/wolfy/tmp/x.js:2
  console.log(bar);

ReferenceError: bar is not defined
    at foo (error.js:2:15)
    at Object.<anonymous> (error.js:5:1)
    ...
    
/*
In this example, JavaScript raises a ReferenceError exception since the variable bar doesn't exist when you try to write it to the log. From the stack trace, we can see that JavaScript detected the error at character 15 on line 2 -- that's where we mention the bar variable -- in the foo function. The rest of the trace tells us that we called foo on line 5 from an anonymous function: one with no name. The trace treats code at the global level as belonging to an anonymous function, so don't worry about the fact that your code doesn't actually have an anonymous function.

If your program uses libraries like Handlebars and jQuery, the stack trace may contain hundreds of lines. Even using node to run this simple program adds around 10 additional lines to the trace. In most cases, you can limit your attention to the lines that mention your JavaScript code file(s) by name: error.js in this case. Each filename in the trace includes a location specified as a line number and column number. The file name, line number, and column number together pinpoint the specific location where the failure occurred and how the program reached that point. Take note of the locations that pertain to your code.

JavaScript uses the call stack to display the stack trace when an exception occurs.

*/