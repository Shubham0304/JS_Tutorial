// reduce :

const myNums = [1,2,3];

const myTotal = myNums.reduce((acc, currentValue)=>{
    console.log(`acc value ${acc} currValue: ${currentValue}`)
    return acc+currentValue;
},5)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "JS",
        price: 300 
    },
        {
        itemName: "java",
        price: 1000 
    },
    {
        itemName: "python",
        price: 1500 
    },
    {
        itemName: "DS",
        price: 800 
    }
]
const totalPrice = shoppingCart.reduce((acc,currentValue)=> {
    return (
        acc+currentValue.price
    );
},0);