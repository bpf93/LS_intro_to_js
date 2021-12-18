function foo() {
  function bar() {
    console.log("BAR");
  }

  bar(); // => BAR
  bar(); //=>
}

foo();
bar();//returns ReferenceError: bar is not defined