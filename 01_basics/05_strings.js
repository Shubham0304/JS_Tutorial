const name = "Shubham";
const repoCount = 4;

//console.log(name + repoCount + " Value");


console.log(`Hello My Name is ${name} and my repo count is ${repoCount}`);


//const gameName = new String('Shubhamhc');
const gameName = "Shubhamhc";

console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf("h"));



//Q. What is the difference between declaring the string like let x = "test" and 
// let let x = new String("test");

// /Ans. | Aspect             | `let x = "test"`                                                | `let x = new String("test")`                                          |
// | ------------------ | --------------------------------------------------------------- | --------------------------------------------------------------------- |
// | Type               | `"string"`                                                      | `"object"`                                                            |
// | Comparison (`===`) | `"test" === "test"` → `true`                                    | `new String("test") === "test"` → `false` (different types)           |
// | Comparison (`==`)  | `"test" == "test"` → `true`                                     | `new String("test") == "test"` → `true` (object coerced to primitive) |
// | Usage              | Recommended (fast, simple)                                      | Not recommended (slower, confusing)                                   |
// | Methods            | Works because JS temporarily wraps primitives in String objects | Same methods available, but always an object                          |

// So the general rule:

// Objects with mutable properties (like plain objects, arrays, maps, sets, etc.) → mutation affects all references.

// Immutable objects (like String, Number, Boolean) → even if created with new, the value cannot be changed, so mutation won’t work. Reassignment just breaks the reference.


//Q. Difference between substring and substr:
// substring(start, end)

// Only works with non-negative indices (negative values are treated as 0).

// end is exclusive.

// If start > end, it swaps the two.

// Example:

// "JavaScript".substring(4, 8); // "Scri"
// "JavaScript".substring(8, 4); // also "Scri" (because it swaps)
// "JavaScript".substring(-6, 4); // same as (0, 4) → "Java"

// 🔹 substr(start, length) ✅ (this is the one with "number of elements")

// The second argument is length, not end index.

// start can be negative (counts from end).

// Example:

// "JavaScript".substr(4, 4);  // "Scri"
// "JavaScript".substr(-6, 4); // "Scri"


// 👉 So to answer you directly:

// substring() does not take “number of elements” — its second argument is still an end index.

// substr() is the one that uses the number of elements as the second argument.


const anotherString = gameName.slice(-8,2);
console.log(anotherString);

//Q. What is the functionality of slice and also how it workds with -ve values as arguements

// Ans. Syntax of slice = string.slice(startIndex,endIndex);
//So for negative values if you specify sring.slice(-6,-2);
//It means that it will star counting from last of the string and the index of the last
// element would be -1 then second last -2 so -6 will be sixth element from last and then two indexes from it


// string.slice(startIndex, endIndex)
// startIndex: The position where extraction begins (inclusive).

// endIndex: The position where extraction ends (exclusive).

// If negative values are used, JavaScript counts from the end of the string:

// -1 → last character

// -2 → second-to-last character, and so on.

// Example with negative values
// js
// Copy code
// let str = "JavaScript";

// let result = str.slice(-6, -2);
// console.log(result);
// Step-by-step:

// str = "JavaScript"

// Indexing from the end:

// css
// Copy code
// J   a   v   a   S   c   r   i   p   t
// 0   1   2   3   4   5   6   7   8   9
// -10 -9 -8 -7 -6 -5 -4 -3 -2 -1

// yaml
// Copy code
// - `slice(-6, -2)` means:  
// Start at `-6` → `"S"` (index 4)  
// End before `-2` → `"p"` (index 8, but exclusive).  
// - Extracted substring → **`"Scri"`**

// ---

// ✅ So your statement is correct:  
// `string.slice(-6, -2)` will start from the **6th character from the end** and stop **just before the 2nd character from the end**.

// ---
const newStringOne = "    Shubham    ";
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://shubham.com/shubham%20joshi";
console.log(url.replace('%20','-'));

console.log(url.includes('shubham'));

const newGameName = "Shubham-new-game-to-play";
console.log(newGameName.split("-"));




// | Method                    | Syntax                  | Handles Negative Index?       | Example                | Output   |
// | ------------------------- | ----------------------- | ----------------------------- | ---------------------- | -------- |
// | **slice(start, end)**     | `slice(start, end)`     | ✅ Yes (counts from end)       | `str.slice(-6, -2)`    | `"Scri"` |
// | **substring(start, end)** | `substring(start, end)` | ❌ No (negative → 0)           | `str.substring(-6, 4)` | `"Java"` |
// |                           |                         | (also swaps if `start > end`) | `str.substring(8, 4)`  | `"Scri"` |
// | **substr(start, length)** | `substr(start, length)` | ✅ Yes (start can be negative) | `str.substr(-6, 4)`    | `"Scri"` |


//Q. what if you provide an index which is not there at all
// 

// Good question 👍 The behavior is a little different for each method when you give an out-of-range index. Let’s break it down with "JavaScript" again.

// 🔹 Case 1: slice(start, end)

// If start is bigger than the string length → returns "" (empty string).

// If end is bigger than length → it just goes to the end of the string.

// let str = "JavaScript";

// str.slice(50, 60);   // ""  (start > length)
// str.slice(4, 50);    // "Script"  (end > length)

// 🔹 Case 2: substring(start, end)

// Treats any number bigger than length as equal to length.

// Negative values are treated as 0.

// If start > end, it swaps them.

// str.substring(50, 60); // ""   (both become length=10)
// str.substring(4, 50);  // "Script" (end adjusted to 10)
// str.substring(-5, 4);  // "Java"   (negative → 0)

// 🔹 Case 3: substr(start, length)

// If start > string length → returns "".

// If length is too large, it just goes to the end of the string.

// str.substr(50, 5);  // ""       (start beyond string length)
// str.substr(4, 50);  // "Script" (length too big → goes to end)


// ✅ Summary of out-of-range behavior:

// slice() → Returns empty string if start >= length.

// substring() → Treats out-of-range as length (or 0 for negatives).

// substr() → Returns empty string if start >= length.


let x = "test_string_old";
let y = new String("test_string2_old");

console.log(typeof(x));
console.log(typeof(y));

let xNew = x;
xNew= "test_string_new";
console.log(`Lets check the value in old x after changing the value in xNew ${x}`);



let yNew=y;
yNew = "test_string2_new";


console.log(`Lets check the value in old y after changing the value in xNew ${y}`);


// | **Method**                               | **Example**                   | **Normal Arg** | **Negative Arg**                                | **Positive Out-of-Range**                       | **Negative Out-of-Range**                        |
// | ---------------------------------------- | ----------------------------- | -------------- | ----------------------------------------------- | ----------------------------------------------- | ------------------------------------------------ |
// | **slice(start, end)**                    | `"abcde".slice(1, 3)`         | `"bc"`         | `"abcde".slice(-3, -1)` → `"cd"`                | `"abcde".slice(10, 12)` → `""`                  | `"abcde".slice(-100, -98)` → `"ab"`              |
// | **substring(start, end)**                | `"abcde".substring(1, 3)`     | `"bc"`         | `"abcde".substring(-3, -1)` → `"a"` (-ve → 0)   | `"abcde".substring(10, 12)` → `""`              | `"abcde".substring(-100, -98)` → `"a"` (-ve → 0) |
// | **substr(start, length)** *(deprecated)* | `"abcde".substr(1, 3)`        | `"bcd"`        | `"abcde".substr(-3, 2)` → `"cd"`                | `"abcde".substr(10, 3)` → `""`                  | `"abcde".substr(-100, 2)` → `"ab"`               |
// | **charAt(index)**                        | `"abcde".charAt(1)`           | `"b"`          | `"abcde".charAt(-1)` → `""`                     | `"abcde".charAt(10)` → `""`                     | `"abcde".charAt(-100)` → `""`                    |
// | **at(index)**                            | `"abcde".at(1)`               | `"b"`          | `"abcde".at(-1)` → `"e"`                        | `"abcde".at(10)` → `undefined`                  | `"abcde".at(-100)` → `undefined`                 |
// | **indexOf(search, fromIndex)**           | `"ababa".indexOf("a", 1)`     | `2`            | `"ababa".indexOf("a", -2)` → `0` (-ve → 0)      | `"ababa".indexOf("a", 10)` → `-1`               | `"ababa".indexOf("a", -100)` → `0`               |
// | **lastIndexOf(search, fromIndex)**       | `"ababa".lastIndexOf("a", 3)` | `3`            | `"ababa".lastIndexOf("a", -2)` → `-1` (-ve → 0) | `"ababa".lastIndexOf("a", 10)` → `4`            | `"ababa".lastIndexOf("a", -100)` → `-1`          |
// | **padStart(targetLength, padString)**    | `"abc".padStart(5, "x")`      | `"xxabc"`      | `"abc".padStart(-2, "x")` → `"abc"`             | `"abc".padStart(100, "x")` → `"xxxxxxxx...abc"` | `"abc".padStart(-100, "x")` → `"abc"`            |
// | **padEnd(targetLength, padString)**      | `"abc".padEnd(5, "x")`        | `"abcxx"`      | `"abc".padEnd(-2, "x")` → `"abc"`               | `"abc".padEnd(100, "x")` → `"abcxxxxxxxx...x"`  | `"abc".padEnd(-100, "x")` → `"abc"`              |
// | **repeat(count)**                        | `"abc".repeat(3)`             | `"abcabcabc"`  | `"abc".repeat(-1)` → ❌ RangeError               | `"abc".repeat(100)` → `"abc"` repeated 100x     | `"abc".repeat(-100)` → ❌ RangeError              |
