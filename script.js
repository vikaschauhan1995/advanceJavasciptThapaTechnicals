const a = {
  state: 'UP',
  city: "GN",
  fullAddress: function (zip, phone) {
    return this.state + ", " + this.city + " " + zip + ", " + phone;
  }
}
const b = {
  state: 'UP',
  city: 'Noida'
}
console.log(a.fullAddress.call(b, 201301, 98711));
console.log(a.fullAddress.apply(b, [201310, 1234]));

// const m = Math.max(1,2,3,4); // output 4
// const m = Math.max.call(null, 1,2,3,4,5); // output 5
const m = Math.max.apply(null, [1, 2, 30, 4, 5]) // output 30

console.log(m);

const p = {
  city: 'GN',
  zipcode: '201310',
  fullAddress: function () {
    return (`city = ${this?.city}, zipcode = ${this?.zipcode}`);
  }
}
const m1 = {
  city: 'Noida'
};
const pp1 = p.fullAddress;
console.log(pp1());

// const p2 = p.fullAddress.bind(m);
const pp = p.fullAddress.bind(p);
console.log(pp());







const p1 = {
  city: 'GN',
  zip: 201310
}
const p2 = {
  city: 'Noida',
  zip: 201310
}
function fullAddress(name) {
  return (`city = ${this?.city}, zipcode = ${this?.zip}: name:${name}`);
}
const _p1 = fullAddress.bind(p1);
console.log(_p1("vikas"));

const _p2 = fullAddress.bind(p2);
console.log(_p2("Anuj"));