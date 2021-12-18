//you apply instance methods to a value of the type that the constructor represents. Thus, we can apply an instance method to the string "Hello". For example, from the method list sidebar, we see the instance method, String.prototype.concat. That is, concat is a method that we can call on any string:

> 'Hello, '.concat('Bob!')
= 'Hello, Bob!'
//The documentation also tells us that Strings have a static method named String.fromCharCode. To call a static method, you use the constructor name (String) instead of a value. For instance:

> String.fromCharCode(97)
= 'a'
/*As you can see, this method returns the character value of the UTF-16 code point, 97. More importantly, we didn't need a String to call it. Instead, we used the constructor to call the method.

Some materials say that fromCharCode's argument is an ASCII value. While that's technically incorrect, it's common enough that you should be aware of the usage. In practice, most of the characters you'll work with will be from the ASCII character set; the ASCII values of those characters are the same as the UTF-16 equivalents.
*/