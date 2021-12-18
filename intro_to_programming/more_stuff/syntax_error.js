/*A SyntaxError is special in that it occurs immediately after loading a JavaScript program, but before it begins to run. Unlike a TypeError exception that is dependent upon runtime conditions, JavaScript detects syntax errors based solely on the text of your program. Since they are detected before execution begins, you can't use a try/catch statement to catch one.

Here's some code that will cause a syntax error:

console.log("hello");

function foobar()
  // some code here
}

foobar();

//output:

}
^

SyntaxError: Unexpected token '}'

There are three major takeaways from the above example:

A SyntaxError usually has nothing to do with the values of any of your variables. You can almost always spot the error visually.
A SyntaxError can occur long after the point where the error was. In the above example, the error is on line 3 (a missing {), but the problem is reported on line 5. There can be many hundreds of lines between the point where the error is and the point where JavaScript detects it. Unfortunately, that's more common than you might think, so be prepared for it.
The code before and after the error does not run. That's because SyntaxErrors are detected before a program begins running. This also shows that there are at least two phases in the life of a program -- a preliminary phase that checks for syntax errors, and an execution phase.

There are some situations where JavaScript can throw a SyntaxError after a program begins running. For instance, this code raises a SyntaxError at runtime:

JSON.parse('not really JSON');  // SyntaxError: Unexpected token i in JSON at position 0
*/