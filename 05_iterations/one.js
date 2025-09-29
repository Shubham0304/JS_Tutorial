// for
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// Assignemt print tables from 1 to 10:

for (let i = 1; i <= 10; i++) {
    console.log (`Table of ${i} :`);

for (let j = 1; j < 10; j++) {
    console.log(`${i} * ${j} = `,i*j);
}
}


// break and continue :

for (let index = 0; index < 20; index++) {
    
    if (index == 5) {
        console.log("Detected 5");
        break;
    }
    console.log(index);
}

for (let index = 0; index < 20; index++) {
    
    if (index == 5) {
        console.log("Detected 5");
        continue;
    }
    console.log(index);
}

