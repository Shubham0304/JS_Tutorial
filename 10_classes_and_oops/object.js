function multiplyBy5(num) {

    return num *5;

}
multiplyBy5.power = 2;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);


function createUser(username, score) {
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function() {
    this.score++;
}

createUser.prototype.printMe = function() {
    console.log(`Score is ${this.score}`);
    
}
const chai = new createUser("chai", 25);
const tea = new createUser("tea", 30);

chai.printMe();

// Q. Whar is the significance of the new keyword?
//Q. tell me if I define a object first using new of a function ,
// then I add some extra methods to its protoype. Now can I access the new properties or methods
// on the old object ?
// Q. If everything boils down to Object in JS, then how are there two different
// datatypes in JS, and Object is in the second one?
