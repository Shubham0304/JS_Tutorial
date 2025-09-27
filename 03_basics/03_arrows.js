const user = {
    username: "Shubham",
    price: 999,
    welcomeMessage: function() {
        console.log(`welcome to website ${this.username}`);
        console.log(this);
    }
}


// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();


// When you run this:
// console.log(this);
// This gives different results when running in a node env vs when running in a browser

//Basically this gives you the context, which is the variables and functions it has access to
// So, console.log(this); if ran on an empty js file on node will give an empty object
// But on Browser, the global object is the Window Object


// function chai() {
//     let username = "Shubham"
//     console.log(this);

// }
// chai();

// When this is accessed inside even an empty function, It gives a lot of results :
// function chai() {
//     let username = "Shubham"
//     console.log(this);

// }
// chai();
// But very important, the context mainly works inside an Object:
// This would give undefined

// function chai() {
//     let username = "Shubham"
//     console.log(this.username);

// }
// chai();



// Arrow Functions :


// const chai = () => {
//     let username = "Shubham"
//     console.log(this.username);
// }
// chai();


// In Arrow Function , Even an empty this would return undefined :

// const chai = () => {
//     let username = "Shubham"
//     console.log(this);
// }
// chai();


// Arrow Function basic syntax :

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }


// Implicit return using arrow :
// When you write the arrow function in the same line, 
// You dont need to use {} and return keyword to return the result:
// const addTwo = (num1, num2) =>  num1 + num2;
// const addTwo = (num1, num2) =>  (num1 + num2);
// To return an object implicitly:
//  const addTwo = (num1, num2) => ({usernam: "Shubham"});





console.log(addTwo(4,6));




