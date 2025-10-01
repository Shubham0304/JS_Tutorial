// for of:

const  arr = [1,2,3,4,5];

for (const num of arr) {
    console.log(num);
}


const greetings = "Hello World!!";

for (const element of greetings) {
    console.log(element);
    
}

// Maps

const map = new Map();
map.set("IN","INDIA");
map.set("USA", "United States Of America");
map.set("Fr", "France");
map.set("IN","INDIA");

console.log(map);

// Maps stores only unique values and also remembers the orders in which they were added.

// for of is mainly used for the iterables, it basically prints all the values present in an iterable
// This prints the whole array:
for (const key of map) {
    console.log(key);
}

//Correct way to print key and value of a Map is :

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

// The above is the correct way to iterate through iteratables
// Most built-in data structures in JS are iterables:

// Strings

// Arrays

// Maps

// Sets

// Typed Arrays

// arguments object

// DOM collections (like NodeList)

// An iterable is any object that has a special method with the key:

// Symbol.iterator

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

const myObject2 = {
    game1: 'NFS',
    game2: 'Spiderman'
}

console.log(myObject);
console.log(myObject2);
