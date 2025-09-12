
// Const cant be changed after the initialization 
const accountId = 144553;
// This would give error:
//accountId =2;
console.log(accountId);

/* var is obsolete, it is avoided now, Hence use let instead of var while declaring variables
   The reason was because var had problem with the block scope and functional scope
   In let that problem is solved
*/
let accountEmail = "test@gmail.com";

accountEmail = "hc@gmail.com";

console.log(accountEmail);


var accountPassword = "testPassword";
accountPassword = "newPassword";
console.log(accountPassword);

// This way of declaring is not suggested but this also works:
accountCity = "Indore";
accountCity = "Oslo";
console.log(accountCity);


// If you just declare the variable and dont define any value in it, It is set to undefined!!
let accountState;
console.table([accountId,accountEmail,accountPassword,accountCity, accountState]);
