let score = 33;
console.log(typeof(score));

score = "33";
console.log(typeof(score));

let valueInNumber = Number(score);
console.log("Output when converting pure number string to number");
console.log(typeof(valueInNumber));
console.log(valueInNumber);

score = "33abc";
valueInNumber = Number(score);
console.log("Output when converting Impure number string to number");
console.log(typeof(valueInNumber));
console.log(valueInNumber);

/* When you convert an impure number to number using Number
It will convert it but the result would be NaN
NaN is a special type*/

score = null;
valueInNumber = Number(score);
console.log("Output when converting null to number");
console.log(typeof(valueInNumber));
console.log(valueInNumber);
/* When converting the null to number using Number, It gives 0
*/


score = undefined;
valueInNumber = Number(score);
console.log("Output when converting undefined to number");
console.log(typeof(valueInNumber));
console.log(valueInNumber);

/* When converting the undefined to number using Number, It gives NaN
*/


score = true;
valueInNumber = Number(score);
console.log("Output when converting boolean to number");
console.log(typeof(valueInNumber));
console.log(valueInNumber);

/* When converting the boolean to number using Number, It gives 1 or 0
for True or False respectively
*/

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof(booleanIsLoggedIn));
console.log(booleanIsLoggedIn);
/* When converting the number to boolean using Boolean, It gives True or False respectively
but in some Boolean conversions the results can be diffferent
*/

isLoggedIn = 3;
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof(booleanIsLoggedIn));
console.log(booleanIsLoggedIn);

isLoggedIn = "";
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof(booleanIsLoggedIn));
console.log(booleanIsLoggedIn);

 isLoggedIn = "Shubham";
 booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof(booleanIsLoggedIn));
console.log(booleanIsLoggedIn);

/* For Boolean conversion: 
1 => True
0 => False
"" => False
"Shubham" => False
*/


// Conversion to String :

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof(stringNumber));