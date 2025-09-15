// Primitive DataTypes :

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false;
const outsideTemp = null;
let userErmail;

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);


const bigNumber = 24245425363466535464655n;


// Reference Types or Non Primitive: 

// Array, Objects, Functions : 

// All the Non primitive datatypes have the returnType Function on TypeOf
// If you use TypeOf(function) it will return function but underlying its type is
//  Function object

// Arrays:
const heroes = ["shaktiman", "nagraj", "doga"];

// Object : 

let myObj = {
    name: "Shubham",
    age: 31
};

// Function:

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof(bigNumber));
console.log(typeof(myFunction));
console.log(typeof(id));


//////////Memory//////////////////////

// Primitive Datatypes are stored on Stack
// Non Prmitive on Heap


