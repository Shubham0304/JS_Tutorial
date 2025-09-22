// singleton object
const tinderUser = new Object();
// console.log(tinderUser);

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = "false";
// console.log(tinderUser);

// Declaring an object inside an object :
const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullname: {
            firstname: "Shubham",
            lastname: "Joshi"
        }
    }
}

console.log(regularUser.fullName.userfullname.firstname);


//Combining two objects:
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b" };
const obj4 = {5: "c", 6: "d" };


// This is wrong :
// As this would just created nested objects;
// const obj3 = {obj1, obj2};
// console.log(obj3);

// Correct way to merge two objects is using Object.assign
// const obj3 = Object.assign(obj1, obj2);
// console.log(obj3);

// Other way is :

const obj3 = Object.assign({}, obj1, obj2, obj4); 
// Here empty object is taken as a gurantee that the empty object is the target and all other objects are the source
// The logic is that the code is :
// const returnedObject =  Object.assign(target, source);
// console.log (returnedObject === target); // This would return true

console.log(obj3);


// Most used way to merge objects is using the Spread operator:

const obj5 = {...obj1, ...obj2,...obj3,...obj4};
console.log(obj5);

// How to access when an array of objects is returned
// const users = [
//     {

//     },
//     {

//     },
//     {

//     }
// ]

// console.log(users[1].email);

console.log(tinderUser);

// To get all the keys or values of a specific object:

console.log(Object.keys(tinderUser));
console.log("Type of : ");
console.log(typeof(Object.keys(tinderUser)));
console.log(Object.keys(tinderUser));

console.log(Object.values(tinderUser));


// Object.enteries: It basically creates each key value of an object to arrays
// So for if an object has 3 key-value pairs, enteries would create 3 arrays

console.log(Object.entries(tinderUser));

// hasOwnProperty:
console.log(tinderUser.hasOwnProperty("isLoggedIn"));


// Destructuring of an Object :

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Shubham"
}

const {courseInstructor: instructor} = course;

console.log(instructor);

// const navbar = ({company}) => {

// }

// navrbar(company = "hitest");

// {
//     "name": "Shubham",
//     "coursename": "JS In Hindi",
//     "price": "Free"
// }