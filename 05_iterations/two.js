// while:

let index = 0;
while (index <= 10) {
    console.log(`Value of Index is: ${index}`);
    index = index+2;
}

let myArray = ["batman", "flash", "superman"];
let arr =0;
while (arr<myArray.length) {
    console.log(`Super Hero : ${myArray[arr]}`);
    //arr = ++arr;
    arr = arr +1;
    // This leads to infinite loop :
    //arr = arr++;

    //Because : 
//     arr++ is the post-increment operator.

// It returns the current value of arr (before increment).

// Then it increments arr behind the scenes.

// But because you’re doing arr = arr++, the returned old value is assigned back to arr.

// Example:

// If arr = 0 → arr++ returns 0, then increments arr to 1.

// But then you assign the returned 0 back: arr = 0.

// Net effect: arr never changes.
}



// Do while :
let score =11;
do {
    console.log(`Score is ${score}`)
} while (score<=10);