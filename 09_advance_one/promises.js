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