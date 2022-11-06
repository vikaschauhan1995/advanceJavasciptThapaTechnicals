const n1 = 5;
console.log(isFinite(n1));

const n2 = Infinity;
console.log(isFinite(n2));

const n3 = "vikas";
console.log(isFinite(n3));

const n4 = -5;
console.log(isFinite(n4));

const n5 = NaN;
console.log(isFinite(n5));


const n6 = 5;
console.log(isNaN(n6));
console.log(Number.isNaN(n6));

const n7 = "vikas";
console.log(isNaN(n7));
console.log(Number.isNaN(n7));

const n8 = NaN;
console.log(isNaN(n8));
console.log(Number.isNaN(n8));

const n9 = Infinity;
console.log(isNaN(n9));
console.log(Number.isNaN(n9));

const n10 = 5;
console.log(Number.isInteger(n10));

const n11 = 5.3;
console.log(Number.isInteger(n11));