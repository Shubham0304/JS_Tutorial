const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift"
}

// Use for in to print values inside object:

for (const key in myObject) {
    console.log(`${key} for shortcut  is ${myObject[key]}`);
}


const programming = ["ruby", "js", "python", "java"];

for (const key in programming) {
    console.log(programming[key]);
   
}

//Usage of for in on Maps:

const map = new Map();
map.set("IN","INDIA");
map.set("USA", "United States Of America");
map.set("Fr", "France");
map.set("IN","INDIA");

//console.log(map);

// This does not prints anything as it is an iterable
for (const key in map) {
    console.log(key);    
}





// Difference between for in and for of:

// | Feature  | `for...in` (keys)             | `for...of` (values)                     |
// | -------- | ----------------------------- | --------------------------------------- |
// | Works on | Objects, Arrays               | Iterables (Arrays, Strings, Maps, Sets) |
// | Returns  | Keys (indices for arrays)     | Values directly                         |
// | Use case | Enumerating object properties | Iterating iterable values               |


