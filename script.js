
sum(5, 10);
function sum(a, b) {
  add = a + b;
  console.log(add);
}
// sum2(10, 20); // Uncaught TypeError: sum2 is not a function
var sum2 = function (a, b) {
  add = a + b;
  console.log(add);
}

// sum3(20, 10); //Uncaught ReferenceError: Cannot access 'sum3' before initialization
const sum3 = (a, b) => {
  add = a + b;
  console.log(add);
}

console.log(myName);
var myName = "vikas";


a = 10;
console.log(a);
var a;

var b = 20;
console.log(b);
var b = 40;

// var c;
console.log("c=", c);
var c = 50;


console.log("I am a " + job); // I am a undefined
var job = "Web Developer";
console.log("I am a " + job); // I am a Web Developer

function whoAmI() {
  console.log("I am a " + job); // I am a undefined
  var job = "Full stack";
  console.log("I am a " + job); // I am a Full Stack
}
whoAmI();