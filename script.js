const pLanguages = ["Javascript", "Python", "c#", ".net", "react"];

const person = {
  name_: "vikas",
};
const iterate = pLanguages.forEach((l, i, arr) => {
  console.log(`${i} - ${l} = ${this}`)
}, person);

const arr1 = [1, 2, 4, 1, 3, 41, 5];
const newArr = arr1.map((l, i) => {
  return l + 100;
});
console.log("updateArr = ", newArr);
// updateArray

const arr2 = [3, 12, 3, 4, 1, 4, 5];
const updateArray = arr2.forEach((l, i) => {
  arr2[i] = arr2[i] + 100;
});
console.log("arr2 = ", arr2);
console.log("---------------");
for (i in pLanguages) {
  console.log(i);
}
console.log("------------------");
// for of loop
for (let languages of pLanguages) {
  console.log(languages);
}
console.log("------------------");
const person1 = {
  name: "vikas",
  age: 27,
  weight: 27
};
for (let key in person1) {
  console.log(key);
}