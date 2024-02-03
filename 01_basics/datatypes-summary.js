//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n // we write n at last to represent bigint



// Reference (Non primitive)

// Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//     name: "hitesh",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

/*
Return type of variables in JavaScript
1) Primitive Datatypes
Number => number
String => string
Boolean => boolean
null => object
undefined => undefined
Symbol => symbol
BigInt => bigint
2) Non-primitive Datatypes
Arrays => object
Function => function
Object => object
*/

// ***************************************Stack & Heap memory**********************************************************

/* 

stack memory used in primitive
-> you get copy of variable


heap memory used in non-primitive
-> you get reference of any variable

*/
// stack

let myYoutubeName="Sohan"


let anotherName=myYoutubeName
anotherName="chai aur code"

console.log(anotherName);
console.log(myYoutubeName);

//Heap

let user1 = {
    email: "abc@gmail.com",
    upi: "user@paytm"
}

let user2=user1

user2.email="Sohan@gmail.com"

console.log(user1.email);
console.log(user2.email);