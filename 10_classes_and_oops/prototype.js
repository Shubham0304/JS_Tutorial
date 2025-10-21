// Q. Add another property to a string which would calculate the real length of a string
// excluding the white spaces


let myHeroes = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getspiderPower: function() {
        console.log(`Spidey Power is : ${this.spiderman}`);
    }
}

Object.prototype.shubham = function() {
    console.log("Shubham is present in all objects");
}

// heroPower.shubham();
//myHeroes.shubham();

Array.prototype.heyShubham = function () {
    console.log("Shubham says Hello");
    
}

myHeroes.heyShubham();
//heroPower.heyShubham();

// inheritance:


const User = {
    name: "Chai",
    email: "chai@gmail.com"
};
const Teacher = {
    makeVideos: true
};

const TeachingSupport = {
    isAvailable: false
};

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
};
//This shows that Teacher will have all the properties of an Object:
// Old syntax:
Teacher.__proto__ = User;

//New Syntax:
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUserName = "ChaiAurCode          ";
String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`); 
}
anotherUserName.trueLength();

"Shubham                             ".trueLength();


