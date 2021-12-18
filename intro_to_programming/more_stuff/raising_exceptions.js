/* It's also possible to raise your own exceptions. For instance:

function foo(number) {
  if (typeof number !== "number") {
    throw new TypeError("expected a number");
  }

  // we're guaranteed to have a number here
}

The throw keyword raises an exception of the type specified as an argument, which is usually given as new followed by one of the Error types described on this page. In this case, we use a TypeError to indicate that we were expecting a different type for the number argument.

Don't raise exceptions for preventable conditions. Exceptions are for exceptional circumstances: situations that your program can't control very easily, such as not being able to connect to a remote site in a web application. The example shown above that tests the argument type is probably not something that you want to do in a real application. Instead, your code should never call foo with a non-numeric argument, or you should return some sort of error indicator like null or undefined.

*/