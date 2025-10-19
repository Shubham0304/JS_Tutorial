const promiseOne = new Promise(function(resolve, reject){
    //Do an async task:
    // DB Calls, cryptography, network }
    setTimeout(() => {
        console.log("Async Task is completed");
        resolve()
    }, 2000);
    })

promiseOne.then(function() {
    console.log("Promise consumed");
})

new Promise((resolve,reject) => {
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
        let error = true;
        if (!error)
        {
            resolve({username: "User2", email: "user2@gmail.com"});
        }
        else {
            reject("Error: Somethig went wrong")
        }
             
    }, 1000);
})


// This is wrong, It will only give you Promise pending when adcessing the username
// const username = promiseFour.then((user)=> {
// console.log(user);
// return user.username;
// })

// console.log(" User is : ",username);


const username = promiseFour
.then((user)=> {
console.log(user);
return user.username;
})
.then((username)=> {
console.log(" User is : ",username);
})
.catch(function(error) {
    console.log(error);
}).finally(()=> {
    console.log("The promise either resolve or rejected");
})

const promiseFive = new Promise( (resolve, reject) => {
    setTimeout(() => {

        let error = false;
        if (!true) {
            resolve({username: "javascript", password: "123"});
        }
        else {
            reject("Error : JS Went wrong");
        }
    }, 1000);
});

async function consumePromiseFive() {
    try {
            const response = await promiseFive
            console.log(response);
        } catch (Error) {
            console.log(Error);
        }
    }
consumePromiseFive();

// Calling API using async await :
async function getAllUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
    } catch (e) {
        console.log(e);
    }
};

getAllUsers();

// Calling API using promise  :

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json
})
.then((data)=> {
console.log(data);
})
.catch((e)=> {
    console.log(e);
})
.finally(()=> {
    console.log("Fetch either completeed or failed");
})


// Q. How to pass a ready made function in then
    
// Q. Difference between response.json and JSON.parse(response)
