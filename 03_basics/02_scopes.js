
var c=300;
let a = 300;
if (true)
{
let a = 10;
const b = 20;
c = 30;
console.log(`The value of a inside scope is ${a}`);
}

//console.log(a);
//console.log(b);
console.log(`The value of a Outside scope is ${a}`);
console.log(c);


// var does not respect the block scope!
// Thats why we dont use it

// Scopes are of two types: 1. Block Scope 2. Global Scope