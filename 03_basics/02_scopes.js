
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


// Nested Scopes:


// function one() {
//     const username = "Shubham";
    
//     function two() {
//     const website = "youtube";
//     console.log(username);
// }
// //This will give error:
// //console.log(website);
// two();
// }

// one();

// When the functions are nested,
// The child function can access all variables of the parent function


// if(true) {
//     const username = "Shubham";
//     if(username == "Shubham") {
//         const website = "youtibe";
//         console.log(username + website);
//     }
//     console.log(website);
// }
// console.log(username);

//////////////////// Interesting/////////////////////////

console.log(addOne(5));

function addOne(num) {
    return num + 1;
}


// This would give error:



// Because if you hold a funtion in a variable, that variable cant be
// accessed or called before the function declaration,
// But if you call a nirmall function before its declaration it works fine!

// Corrrect way is :

const addTwo = function 
(num) {
    return num +2;
}
console.log(addTwo(7));
