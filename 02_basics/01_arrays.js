// Arrays:

const myArr = [1,2,3,4,5,6];

//console.log(myArr[1]);


// Array Copy Operation makes shallow copies i.e. 
// The copies and the original share the same reference point

const myHeroes = ["shaktiman", "naagraj"];

const myArr2 = new Array(1,2,3,4,5);


// Array methods : 


myArr.push(6);
myArr.push(7);
// console.log(myArr);
//Pop removes the last element from the array
myArr.pop();
// console.log(myArr);

// Unshift basically adds the elements to the start of the array
// With unshift the problem is whole array needs to be rearranged
myArr.unshift(8);
//console.log(myArr);

// Shift removes the first element from the array
myArr.shift();
//console.log(myArr);
// console.log((myArr.includes(8)));

// console.log(typeof(myArr.includes(8)));


// console.log((myArr.indexOf(8)));
// console.log((myArr.indexOf(6)));


// Array.join binds an array and cnverts the array to string
const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr);

// slice and splice

// Slice returns a part of the array but does not manipulate the original array

console.log("A", myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("B", myArr);

// Splice  returns a part of the array but does  manipulate the original array
// And It removes the elements from the array

console.log("A", myArr);

const myn2 = myArr.splice(1,3);
console.log(myn2);
console.log("B", myArr);
