/*
Write code that checks whether the string byteSequence 
contains the character x.

let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';
*/

//My answer:

let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';
let found = /x/.test(byteSequence);

//console.log(found);

if (found) {
  console.log('Contains the letter "x".');
} else {
  console.log('Does not contain the letter "x".')
}

/*Answer provided:

byteSequence.includes('x'); // true

Further exploration
It's a great exercise to try to implement the functionality of String.prototype.includes() yourself.

function includes(str, char) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return true;
    }
  }

  return false;
}

console.log(includes(byteSequence, 'x'));
*/