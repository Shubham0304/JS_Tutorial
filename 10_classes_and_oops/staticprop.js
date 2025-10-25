class User {
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`Username: ${this.username}`);
    }
    static createId() {
        return `123`;
    }
}

const shubham = new User("shubham");
console.log(shubham.createId());


// static keyword is used on a property or a method to which you dont wanna give access to the instances
