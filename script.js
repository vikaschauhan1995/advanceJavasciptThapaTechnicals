// var, let & const
function fullName() {
  if (true) {
    let fName = "Vikas";
    const lName = "Chauhan";
    console.log("My name is " + fName + " " + lName);
  }
  // console.log("(option) name " + fName); // Uncaught ReferenceError: fName is not defined
  // console.log("var1 value is = ", lName); // Uncaught ReferenceError: lName is not defined
}
fullName(true);


function fullName1() {
  if (true) {
    var fName = "vikas";
    var lName = "chauhan";
  }
  console.log("(option) name " + fName);
  console.log("var1 value is = ", lName);
}

fullName1();

var myFirstName = "Vikas";
if (true) {
  var myFirstName = "Anuj";
  console.log("myFirstName (in) = " + myFirstName);
}
console.log("myFirstName (out) = " + myFirstName);

var myLastName = "Chauhan";
var myLastName = "Tripathi";
console.log("myLastName = " + myLastName);

console.log("--------------------------------");

let myFullName = "vikas chauhan";
if (true) {
  let myFullName = "Anuj Chauhan";
  console.log("myFullName (in) = ", myFullName);
}
console.log("myFullName (out)= ", myFullName);


console.log("--------------------------------");

let yourName = "vikas";
if (true) {
  // var yourName = "Anuj"; // Uncaught SyntaxError: Identifier 'yourName' has already been declared
  console.log("yourName (in) = ", myFullName);
}


// let can't be re-declared on the same scope
// var is functional scoped and let, const is blocked scoped