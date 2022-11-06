let a = true ? 5 : 0;
console.log(a);

// default parameters
function multiply(a, b) {
  b = (b === undefined) ? 1 : b;
  console.log("multiply = ", a * b);
}
multiply(4);

function addition(a, b = 1) {
  console.log("addition = ", a + b);
}
addition(4);

const substract = (a, b = 3) => {
  console.log(`${a - b}`);
}
substract(10);