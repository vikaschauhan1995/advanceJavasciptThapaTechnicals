const fName = "Vikas";
console.log(`My name is ${fName}`);

console.log(`${fName}`.startsWith('v')); // case sensitive
console.log(fName.startsWith('V'));

const fullName = "Vikas Chauhan";
console.log(fullName.includes('kas'));

// repeat
const myName = "vikas ";
const lName = "Chauhan";
console.log(myName.repeat(10));
console.log(`${fName} ${lName} `.repeat(5));