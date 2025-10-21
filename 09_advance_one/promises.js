const promiseOne = new Promise(function(resolve, reject){
    // Do an async task:
    // Example: DB Calls, cryptography, network requests, etc.
    setTimeout(() => {
        console.log("Async Task is completed");
        resolve()
    }, 2000);
})

promiseOne.then(function() {
    console.log("Promise consumed");
})


new Promise((resolve, reject) => {
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
    }, 1000)
}).then(()=> {
    console.log("Async task 2 resolved");
});


const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(()=>{
        resolve({username: "Chai", email: "chai@chai.com"})
    }, 1000);
});

promiseThree.then((user)=> {
    console.log(user);
})


const promiseFour = new Promise((resolve,reject)=> {
    setTimeout(() => {
        let error = true; // Try changing this to false to see both cases
        if (!error) {
            resolve({username: "User2", email: "user2@gmail.com"});
        } else {
            reject("Error: Something went wrong");
        }
    }, 1000);
});


// ❌ Wrong way to access async data directly (Promise is asynchronous)
// const username = promiseFour.then((user)=> {
//     console.log(user);
//     return user.username;
// })
// console.log("User is:", username); // Will print: Promise <pending>


// ✅ Correct way to handle async result using .then() and .catch()
const username = promiseFour
.then((user)=> {
    console.log(user);
    return user.username;
})
.then((username)=> {
    console.log("User is:", username);
})
.catch(function(error) {
    console.log(error);
})
.finally(()=> {
    console.log("The promise either resolved or rejected");
});


// ============================
// Example 5: Promise with async/await
// ============================
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false; // change to true/false to test behavior

        // ❌ Bug fix: "if (!true)" will never run because it's always false
        // ✅ Correct:
        if (!error) {
            resolve({username: "javascript", password: "123"});
        } else {
            reject("Error : JS Went wrong");
        }
    }, 1000);
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive; // waits until resolved/rejected
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();


// ============================
// Calling API using async/await
// ============================
async function getAllUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json(); // ✅ Must call it as a function
        console.log(data);
    } catch (e) {
        console.log(e);
    }
};

getAllUsers();


// ============================
// Calling API using Promise chain (.then)
// ============================

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    // ❌ Bug fix: Missing parentheses
    // return response.json; → returns the function itself, not its result
    return response.json(); // ✅ Correct
})
.then((data)=> {
    console.log(data);
})
.catch((e)=> {
    console.log(e);
})
.finally(()=> {
    console.log("Fetch either completed or failed");
})


// Q. How to pass a ready-made function in .then()
// A. You can pass a function reference directly instead of defining it inline.
// Example:
function logData(data) {
    console.log("Data:", data);
}

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(logData) // passing function reference
    .catch(console.error)
    .finally(() => console.log("Done"));


// Q. Difference between response.json() and JSON.parse(response)

// ✅ response.json():
// - Used with the Fetch API Response object.
// - It reads the body stream and parses it into a JavaScript object.
// - It returns a Promise because reading the body is asynchronous.
// Example: const data = await response.json();

// ✅ JSON.parse(response):
// - Used when you already have a raw JSON string.
// - Converts a JSON string into a JavaScript object synchronously.
// Example: const obj = JSON.parse('{"name":"Shubham"}');

// ⚠️ You CANNOT use JSON.parse(response) directly on a Fetch Response
// because 'response' is not a string — it's a Response object.
// You must call response.json() first.
