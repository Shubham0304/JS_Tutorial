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