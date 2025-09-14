/* When  comparing the dataTypes of different Types:
The results may not be predictable
The  equality check == and comparision > < >= <= work differently
Comparision convert null to a number, treating it as 0
Thats why null >= 0 is true and null > 0 is false
*/ 

// console.log("2" > 1);
// console.log("0" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);


/*
Comparision with undefined:
This always returns false
*/ 

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

/*
== is Equality Check, it checks just the equality of the values
=== is Strict Check, it checks equality and the type of dataTyepes as well
*/ 
// This would return true
console.log( 2 == "2" );
// This would return false
console.log( 2 === "2" );




