const score = 400;

const balance = new Number(100);

console.log(balance);
console.log(balance.toString());
console.log(balance.toFixed(2));


const otherNumber = 23.8966;

console.log(otherNumber.toPrecision(3));

const hundreds = 100000;
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString("en-IN"));
console.log(Number.MAX_VALUE);


////////////////////////////////////MATHS////////////////////////////////////

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.4555));
console.log(Math.ceil(4.4555));
console.log(Math.floor(4.4555));
console.log(Math.min(4,9,4,5,4,55,34,36,66,43.23));
console.log(Math.max(4,9,4,5,4,55,34,36,66,43.23));
console.log(Math.random());
console.log(Math.round((Math.random() * 10 +1)));

const min = 10;
const max = 60;


// Important :
console.log(Math.floor(Math.random() * (max - min + 1)) + min);









