const marvel_heroes = ["thor", "ironman", "flash"];

const dc_heroes = ["superman", "flash", "batman"];

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);


// When you push one array to another : the second array which is merged 
// will be merged as a single element in the first array.
// Push makes the changes in the original array on which the push opertation is performed.
// console.log(marvel_heroes[3][1]);


//.push() does mutate the array (adds elements directly), while .concat() returns a new array.
// But the new array which concat returns it has all the elements from both the arrays merged
// 

const concatenatedArray = marvel_heroes.concat(dc_heroes);
console.log(concatenatedArray);
console.log(concatenatedArray[5]);


// Spread operator :

const all_new_heroes = [...marvel_heroes, ...dc_heroes];
console.log(all_new_heroes);


//.concat()

// Method on arrays.

// Returns a new array that merges values.

// Accepts arrays and values as arguments.

// Does not modify the original array.


//Spread

// Operator that expands arrays (or objects) in place.

// Used inside array literals ([ ...a, ...b ]) to merge.

// More flexible: you can mix arrays, values, and even destructure objects.

const another_array = [1,2,3, [4,5,6],7,[6,7,[4,5]]];

const real_another_array = another_array.flat(Infinity);

console.log(real_another_array);

// Array.flat() : 
// Operator that expands arrays (or objects) in place.

// Used inside array literals ([ ...a, ...b ]) to merge.

// More flexible: you can mix arrays, values, and even destructure objects.

console.log(Array.isArray("Shubham"));
// Array.from :  Array.from() is a static method that creates a new shallow-copied Array instance from:

// Array-like objects (like arguments, NodeList, Set, Map, strings, etc.)

// Iterable objects (anything you can loop with for...of).
console.log(Array.from("Shubham"));
console.log(Array.from({name: "Shubham"})); //Interesting case when converting object to Array

// Array.from() is great for converting iterables (string, Set, Map, NodeList, etc.) into arrays.

// Can also map elements at the same time.
// Handy for generating arrays of a certain length.

let score1 = 100;
let score2 = 200;
let score3 = 300;

// Array.of() is a static method that creates a new array from the arguments you pass in.
// Returns a new array containing exactly those elements.
console.log(Array.of(score1, score2,score3));


