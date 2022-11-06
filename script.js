
// ES 5
const numbers = [5, 2, 4];
function sumOfNumbers(a, b, c) {
  console.log(`${a + b + c}`);
}
sumOfNumbers.apply(null, numbers);

const person1 = {
  name: 'Vikas',
  age: 27
};
function bio(weight, height) {
  console.log(`My name is ${this.name} and i am ${this.age} years old, weight = ${weight}kg, height = ${height}"ft`);
}
bio.call(person1, 71, 5.5);

const person2 = {
  name: 'Yogesh',
  age: 28
};
bio.apply(person2, [74, 5.6]);

// ES 6 
// spread operator replaces apply method
const weightHeight = [76, 5.8];
bio.call(person2, ...weightHeight);

function namesFunc(a, b) {
  console.log(a, b);
}
const names = ['Vikas', 'Anuj', 'Yogesh'];
namesFunc(...names);


// spread operator replaces call method also
const ages = [55, 44, 78];
function sumOfWeight(...rest) {
  let total = 0;
  for (i of rest) {
    total += i;
  }
  console.log(total);
}
sumOfWeight(...ages)

// ES 5 concat
const arr_1 = [1, 2, 3];
const arr_2 = [4, 5, 6];
const combine = arr_1.concat(arr_2);
console.log(combine);

// spread operator replaces concat method
const combine_arr = [...arr_1, ...arr_2];
console.log(combine_arr);

// ES 5 copy of array
const fruits = ['banana', 'orange', 'apple'];
const shallowCopy = fruits.slice();
shallowCopy.push('grapes')
console.log("shallowCopy ", shallowCopy);
console.log("fruits ", fruits);

// ES 6 spread operator replaces copy of array
const furniture = ['table', 'almira', 'stool'];
const newFurnitures = [...furniture, 'cot'];
console.log("newFurnitures ", newFurnitures);
console.log("furniture ", furniture);

function fullName(fName, lName) {
  const f = `${fName} f ${lName}`;
  return f;
}
const myName = ['vikas', 'chauhan'];
console.log(fullName.call({}, myName));