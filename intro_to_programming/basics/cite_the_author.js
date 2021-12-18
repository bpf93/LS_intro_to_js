/*
cite('Brendan Eich', 'Always bet on JavaScript.');
// logs:
// Brendan Eich said: "Always bet on JavaScript."
*/

//My answer:

function cite(author, quote) {
  console.log(`${author} said, "${quote}"`);
}

cite('Brendan Eich', 'Always bet on JavaScript.');

/*
Answer provided:

//same answer, using template literal. 


//answer using string concatenation:
function cite(author, quote) {
  console.log(author + ' said: "' + quote + '"');
}
*/