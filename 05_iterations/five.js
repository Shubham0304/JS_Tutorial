// foreach:

const coding = ["java", "python", "ruby", "js"];

// 
coding.forEach(function(x) {
    console.log(x);
})

// The above function can be written as :
coding.forEach((x)=> {console.log(x)});

// You can also pass an entire function in foreach:
// This will execute the funciton for each item in the array
function printMe(item) {
    console.log(item);
}

coding.forEach(printMe);

// Foreach has access to a many thing of an array like items, index, entire array: 
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// })


const myCoding = [{
    languageName: "javascript",
    languageFileName: "js"
},
{
    languageName: "python",
    languageFileName: "py"
},
{
    languageName: "C#",
    languageFileName: ".net"
}];

myCoding.forEach( (item)=> {
    console.log(item.languageName)

});