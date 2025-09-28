// Control flow:

// const isUserLoggedIn = true;

// // if(isUserLoggedIn) {

// // }


// const score = 200;

// if (score > 100) {
//     const power = "fly"
//     console.log(`User power : ${power}`);
// }
// // This would give the error:
// //console.log(`User power : ${power}`);
// power is only valid in the function scope where it is declared


// // Implicit scope:
// const balance = 500;
// if (balance >= 500) console.log("test");

// // Not recommended:
// const balance2 = 500;
// if (balance >= 500) console.log("test"), console.log("test2");

// const balance = 1000;

// if (balance < 500) {
//     console.log("less than 500");
// }
// else if (balance < 750) {
//     console.log("less than 750");
// }
// else if (balance < 900) {
//     console.log("less than 900");
// }
// else {
//     console.log("less than 1200");
// }


const isUserLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;


if (isUserLoggedIn && debitCard) {
    console.log("Allow to buy course");
}
if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("Allow to buy course");
}



