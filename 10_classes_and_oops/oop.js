const user = {
    username: "Shubham",
    loginCount: 8,
    isSignedIn: true,
    getUserDetails: function() {
        console.log("Got user details from DB");
        console.log(this.username, this.loginCount, this.isSignedIn);
        console.log(this);
    }
};

// console.log(user.username);
// console.log(user["loginCount"]);
// user.getUserDetails();
// console.log(this);


// Constructor function :

// Q. Difference between {} and using new keyword to create an Object
// {} (object literal) → creates a single unique object directly. 
// It's useful when you only need one instance of that object.
// Example: const user = { name: "Shubham" };

// Using 'new' keyword with a constructor function → 
// Creates a new instance (object) every time it's called. 
// Useful for creating multiple similar objects with the same structure.
// Example: const user1 = new User("Shubham", 8, true);

function User (username, loginCount, isSignedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isSignedIn = isSignedIn;

    // 'return this;' is NOT required — the 'new' keyword automatically returns the new object.
    // return this;
}

// When you do this :
// When you even access userOne, the values in it would be overwritten by userTwo
// const userOne = User("Shubham", 40, false);
// const userTwo = User("Chai aur Code", 30, true);
// console.log(userOne);

// Q. Why are the values getting overwritten here ?
// Because when you call 'User()' without 'new', 
// 'this' refers to the global object (window in browser / global in Node.js).
// So both calls modify the same global scope instead of creating separate objects.
// In strict mode, 'this' would be undefined in such a case.
// To fix this, you must use 'new' so that a new instance is created each time.


// To overcome that issue, You need to create User with new keyword that is 
// using a constructor function. This would create a new instance every time it is invoked.

const userOne = new User("Shubham", 40, false);
const userTwo = new User("Chai aur Code", 30, true);
console.log(userOne);
console.log(userOne.constructor);
console.log(userOne instanceof(User));


// Whenever you use 'new' keyword: 
// 1. A new empty object is created (called an instance).
// 2. The constructor function is called, and inside it, 'this' refers to that new object.
// 3. The properties and methods are assigned to 'this'.
// 4. The new object is automatically returned (no need for 'return this;').


// Additional Notes:
// - If you remove 'this' inside the constructor, 
//   the variables (username, loginCount, etc.) become local and vanish after execution.
//   Example:
//     function User(username, loginC
