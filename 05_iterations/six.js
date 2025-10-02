const coding = ["java", "python", "ruby", "js"];

const values = coding.forEach( (item)=> {
    console.log(item);
    return item;

})

// This would return undefined, Because forach does not return anthing but gives undefined
console.log(`Values : ${values}`);

const myNums = [1,2,3,4,5,6,7,8,9,10];

// Filter Operation : As foreach does not returns any value, you can use filter 

// const newNums = myNums.filter( (num)=> {
// return num>4;
// })

// console.log(newNums);

// const newNums = [];

// myNums.forEach( (num) => {

//     if (num>4) {
//         newNums.push(num);
//     }
// });
// console.log(newNums);


