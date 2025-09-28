// Falsy Values: The values which are considered as false:
// false , 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy Values: The values which are considered as True :
// "0", "false", " ", [], {}, function(){}


// To check if array is empty or not:

const userEmail = [];

if (userEmail.length ===0) {
    console.log("Array is empty");
}

// To check if object is empty or not:
const emptyObj = {};

if (Object.keys(emptyObj).length) {
    console.log("Object is empty");
}

// Null Coalescing Operator ?? : null undefined
// If value is null then it handles it

let val1;
val1 = null ?? 10;
val1 = undefined ?? 15;
val1 = null ?? 10 ?? 15;
console.log(val1);

// let result = value1 ?? value2;
// If value1 is not null and not undefined, then result = value1.

// If value1 is null or undefined, then result = value2.


// Ternary Operator ? :
// condition ? true_statement : false_statement
// const iceTeaPrice = 100;
// iceTeaPrice >= 80 ? console.log("More than 80") : console.log("Less than 80"); 
