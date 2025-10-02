const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.map( (x) => {
// return x+10;
// });


// console.log(newNums);

// map is used to apply a function to an array
// Chaining:

const newNums = myNums.map( (x)=> {
    return x*10;
}).map((x)=> { return x+1;
}).filter((x)=> {
    if (x>40) {
        return x;
    }
})

console.log(newNums);

