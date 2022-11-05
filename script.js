let [fName, lName] = ["Vikas", "Chauhan"];

console.log(fName, lName);

const person1 = {
  firstName: "Anuj",
  lastName: "Chauhan"
};
var { f_name, l_name } = person1; // variable name and property name must be same
console.log(f_name, l_name); // output: undefined undefined
var { firstName, lastName } = person1;
console.log(firstName, lastName); // Anuj Chauhan
var { firstName: myFirstName, lastName: myLastName } = person1;
console.log(myFirstName, myLastName); // Anuj Chauhan

const person2 = {
  name: "Yogesh",
  work: {
    languages: {
      spoken: "English",
      computer: ".net"
    }
  }
};
const {
  name: n,
  work: {
    languages,
    languages: { spoken, computer }
  }
} = person2;
console.log(`name = ${n}
work = ${spoken}
languages = ${languages, spoken}
`);