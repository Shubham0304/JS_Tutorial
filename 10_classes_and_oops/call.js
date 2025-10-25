function setUsername(username) {
    this.username = username;
    console.log("called");
     
}

// This wont call the setUsername:
function createUser(username, email, password) {
    setUsername(username)
    this.email = email  
    this.password = password
}

//Correct way : 
function createUser(username, email, password) {
    setUsername.call(this, username)
    this.email = email  
    this.password = password
}

const chai = new createUser("chai", "chai@google.com", "test1234");
console.log(chai);


// Each function in JavaScript gets its own this, depending on how it’s called.

// Just because one function is inside another doesn’t mean they share the same this.

// function createUser(username, email, password) {
//   setUsername.call(this, username); // manually give 'this' to setUsername
//   this.email = email;
// }