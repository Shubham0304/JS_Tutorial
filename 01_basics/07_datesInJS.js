// Dates:

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof(myDate));

//let myCreatedDate = new Date(2023,0,23);
//let myCreatedDate = new Date(2023,0,23, 5, 3);
//let myCreatedDate = new Date("2023-01-14");
let myCreatedDate = new Date("03-03-2023");
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));
console.log(Math.floor(Date.now()/1000/60/60));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());


console.log(newDate.toLocaleString('default', {
    weekday: 'long'
}));

// Imp  NOte: usually months in a Date Object start from 0, instead of 1
// If you use numeric constructor example: let safeDate2 = new Date(2023, 2, 3); // ✅ year=2023, month=2 (March), day=3
// If let safeDate = new Date("2023-03-03"); // ✅ always March 3, 2023 