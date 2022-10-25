// "use strict"

function sum(a, b) {
  // add = a + b; // Uncaught ReferenceError: add is not defined
  var add = a + b;
  console.log(add);
}
sum(10, 20);

// function sub(a, a) { // Duplicate parameter name not allowed in this
function sub(a, a) {
  subs = a - 20;
  console.log(subs);
}
sub(40, 10);