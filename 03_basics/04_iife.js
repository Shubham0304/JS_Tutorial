// IIFE: Immideately Invoked Fnction Expression (IIFE):

// Those functions which needs to be invoked immideately after declaring
// Need for an IIFE: 1. To start a connection as soon as its declared
// 2. To prevent global scope pollution
// Example:

//named iifi:
(function chai() {
    console.log("Database Connected");
})();
// So the basic syntax is : ()();
//IIFE using arrow function :

//Unnamed iifi:
(
    (name)=> {
        console.log(`Databse conected2 ${name}`);
    }
)("Shubham");

// How does IIE prevents global scope pollution?
// IIFEs prevent global scope pollution by immediately executing inside their own function scope, keeping internal variables/functions private and avoiding conflicts with other scripts.
// var counter = 100; // global

// (function() {
//   var counter = 0;  // local to IIFE
//   console.log("Inside IIFE:", counter);
// })();

// console.log("Outside IIFE:", counter);
