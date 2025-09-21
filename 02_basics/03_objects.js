// Objects
// object literals



const jsUser = {
    name: "Shubham",
    "full Name": "Shubham Joshi",
    "maritalStatus": "Single",
    age: 31,
    location: "Oslo",
    email: "shubhamjoshi0304@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
};

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full Name"]);

// If the key has spaces in it, the object cant be accessed using the . notation
console.log(jsUser.maritalStatus);

// Usage of Symbol as a key in an Object :
const mySum = Symbol("key1");

//"key1" is just a description attached to the Symbol mySum

const jsUser2 = {
    name: "Test",
    "full Name": "Test User",
    "maritalStatus": "Single",
    age: 28,
    location: "Oslo",
    email: "testuser@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["Wednesday","Friday"],
    mySum: "myKey1"
};
console.log(jsUser2);
console.log(jsUser2["mySum"]);
//This is wromg way 
console.log(typeof(jsUser2["mySum"]));

// The correct way is to use it using [] while declaring symbol as key
// And also access it using []

const jsUser3 = {
    name: "Test",
    "full Name": "Test User",
    "maritalStatus": "Single",
    age: 28,
    location: "Oslo",
    email: "testuser@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["Wednesday","Friday"],
    [mySum]: "myKey1"
};

// Correct way :
console.log(jsUser3[mySum]);

console.log(typeof(jsUser3[mySum]));

// typeof Object.keys(obj) → always "object" (because arrays are objects).

// Object.keys() → only string keys.

// To get Symbols, use Object.getOwnPropertySymbols(obj).
// console.log(typeof(Object.keys(jsUser3)));



// Normal object keys

// If you use a string or number as a key, JavaScript will convert it to a string internally.

// Symbols are different

// Symbols are the only type of key that is not converted to a string.

// They stay as Symbols, which is why you must use [mySymbol] to access them.

// To change the value in an Object :

jsUser["email"] = "joshishubham0304@gmail.com";
console.log(jsUser["email"]);

// If you wamt to lock the values an object use obj.freeze()
// Changing the value after the freeze wont give you the error but the change wont propogate

// Object.freeze(jsUser);


//Using function inside an Object
console.log(jsUser3);

jsUser3.greetings = function() {
    console.log("Hello JsUser3");
}

console.log(jsUser3);

// How to access a Funtion inside the object:

// These would return [Function (anonymous) 
// basically it would return the type of the value which is function

// Basically this returns a reference to the function
// console.log(jsUser3["greetings"]);
// console.log(jsUser3.greetings);

// This would give you the value and undefined both:
 console.log(jsUser3.greetings());

//  If your function only logs something but doesn’t return a value, the console.log around it will print the log and undefined (because the function returns nothing). That’s normal.

// How to access a value of a object in one of its own function : 

 jsUser3.greetings2 = function() {
    console.log(`Hello JS User, ${this.name}`);
 }
 console.log(jsUser3.greetings2());

// Ways to access object properties:
//
// 1. Using .     → Works only for valid identifiers (no spaces, no symbols)
// 2. Using [" "] → Works for string keys (even with spaces/special chars), not for Symbols
// 3. Using [key] → Works for variables (string or Symbol)

// Dot notation (obj.key) doesn’t work with keys that contain spaces.

// Bracket notation (obj["key"]) works for all string keys.

// Symbol keys can only be used with brackets and the Symbol reference itself.










