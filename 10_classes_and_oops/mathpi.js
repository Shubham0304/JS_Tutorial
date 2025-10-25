const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(Math.PI);
console.log(descriptor);

//const mynewObject = Object.create(null);

const chai = {
    name : "ginger chai",
    price: 250,
    isAvailable: true
}

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
Object.defineProperty(chai, "name", {
    writable : false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));


for (let [key, value] of Object.entries(chai)) {
    if (typeof(value) !== "function")
    console.log(`${key} : ${value}`);
    
    
}