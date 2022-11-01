let a = 5;
let b = a;

b += 5;

console.log(a);
console.log(b);


const person1 = {
  fName: "Vikas",
  lName: "Chauhan"
};
const person2 = person1;

person2.fName = "Anuj";

console.log(person1);
console.log(person2);


const arr1 = [1, 2, 3, 4];
const arr2 = arr1;

arr2.push(5);

console.log(arr1);
console.log(arr2);

console.log("--------------------");

const arr3 = [1, 2, 3, 4];
// const arr4 = [].concat(arr3);
const arr4 = [...arr3];
// const arr5 = [...arr3, ...arr4];
arr4.push(5);

console.log(arr3);
console.log(arr4);
// console.log(arr5)

console.log("--------------------");

let c = 5;
let d = [1, 2]
const add = (c, [...d]) => {
  c++;
  d.push(3);
  console.log("d in add function = ", d);
}
add(c, d);
console.log(c);
console.log(d);

console.log("--------------------");


let height = 5.5;
const vikas = {
  firstName: "Vikas",
  weight: 77
};

const changeValue = (height, v) => {
  height = 6
  v.weight = 80;
}
changeValue(height, vikas);

console.log("height ", height);
console.log("vikas.weight ", vikas.weight);

console.log("--------------------");

const price = 2.5;
const car = {
  brand: "Toyota",
  mileage: 15
};
const updateValue = (price, { ...c }) => {
  price = 3;
  c.mileage = 20;
}
updateValue(price, car);

console.log(price);
console.log(car.mileage);