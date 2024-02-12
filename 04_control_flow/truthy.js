const userEmail = [] // here if we give "" means empty string then it will consider false
// on the other hand if we give [] means empty array then it will consider true


if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// so we didnt compare if given input is valid email or not , we just assumed that it was present
// this is the concept of truthy values


// falsy values are given below ->
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values are given below ->
// "0" (means non empty string)
//'false' (here false is in string means non empty string)
// " ", [], {}, function(){}

// false == 0  -> true
// false == ''  -> true
// 0 == '' -> true

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) { // checking if keys of object are empty, if true means empty object
    console.log("Object is empty");
}

//********* Nullish Coalescing Operator (??): null undefined

/* The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when
its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. */

let val1;
// val1 = 5 ?? 10 // -> 5
// val1 = null ?? 10 // -> null
// val1 = undefined ?? 15 // -> 15 
val1 = null ?? 10 ?? 20 // it will always take first not null value , in this case o/p -> 10



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")