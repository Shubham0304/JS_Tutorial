// Functions :

function sayMyName() {

    console.log("S");
    console.log("H");
    console.log("U");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("M");
}

//sayMyName();

// function addTwoNumbers(number1, number2) {

//     console.log(number1 + number2);
// }

// addTwoNumbers(5,6);
// addTwoNumbers(5,"6");
// addTwoNumbers(5,"a");
// addTwoNumbers(3,null);


// Whenever you define a function and define the input needed by that function, then 
// they are called parameters, 
// Whereas, the input passed to a function when you are calling it are called Arguements

function addTwoNumbers(number1, number2) {

    return (number1 + number2);
}


// const result = addTwoNumbers(3,5);

// console.log("Result: "+result);


function loginUserMessage(username = "sam") {

    if(username === undefined)
    {
        console.log("Please enter a username");
        return;
    }

    return `${username} just logged in`;
}


// console.log(loginUserMessage("Shubham"));

// When you dont pass the needed arguement to a function,
// The function takes the input to those as undefined
console.log(loginUserMessage());



//Multiple Values can be passed in a function using rest operator:
// Which is ...
function calculateCartPrice(...num1) {

    return num1;


}
console.log(calculateCartPrice(200,400,500));


const user = {

    username: "Shubham",
    price: 199
};

function handleObject(anyObject) {

    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);
handleObject({
    username: "Sam",
    price: 399
}); 


const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {

    return getArray[1];

}

console.log(returnSecondValue(myNewArray));

