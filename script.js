let a = 1;
let b = "vikas";
let c = true;
let d;
let e = "";
let f = null;

console.log(typeof (c));
console.log(typeof (d));
console.log(typeof (e));
console.log(typeof (f))
console.log("-----------------------------");
const person = {
  name: "vikas",
};
person.age = 27;
console.log(typeof (person));
console.log(typeof ({}));
console.log(typeof ([]));


const book = () => {
  console.log("this is book function");
}
book.thickness = "250pages";
console.log(book.thickness);



console.log("---------------------------------");
const car = ["tata", "mahindra"];
car._2 = "toyoya";
console.log(car);