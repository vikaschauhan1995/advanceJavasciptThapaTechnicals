const arr1 = [12, 3, 4, 55];
const arr1_value = [...arr1, 10];
console.log(arr1_value);
console.log(arr1);

// Es5
function sumOfParam(a, b, c, d) {
  console.log(`Sum = ${a + b + c + d}`);
}
sumOfParam(1, 2, 3, 4);

// Es6
function paramSum(...rest) {
  // console.log(rest);
  let total = 0;
  for (i of rest) {
    total += i;
  }
  console.log(`Total = ${total}`);
}
paramSum(1, 2, 3, 4);

console.log("----------------------");
function nameFunc(a, b, ...c) {
  console.log(`${a} ${b}`); // Ronaldo Neyamar
  console.log(c); // ['Pele', 'Messi', 'Edan]
  console.log(c[0]); // Pele
  console.log(c.length); // 3
  console.log(c.indexOf('Edan')); // 2
}
nameFunc('Ronaldo', 'Neymar', 'Pele', 'Messi', 'Edan')
