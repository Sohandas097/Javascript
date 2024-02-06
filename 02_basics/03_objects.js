// singleton

// object literalls
// Object.create() // -> its constructer method of creating object ( in case of singleton)

const mySym = Symbol("key1")


const JsUser = {
    name: "Sohan",
    "full name": "Sohan Das",
    // mySym: "myKey1", 
    /* -> if we use symbol in object like this then it is not considered as symbol
    rather it is considered as a string
    */ 
   [mySym]: "myKey1",  // -> correct way to use symbol in object
    age: 18,
    location: "Kolkata",
    email: "sohan@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// methods of printing values of any object
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser.mySym); // -> o/p is myKey1 but here it is not symbol , It is string
// console.log(typeof JsUser.mySym); // -> string
// console.log(JsUser[mySym]);
// console.log(typeof [mySym]); // -> object

// JsUser.email = "Sohan@google.com" // value of email is changed
// Object.freeze(JsUser) // -> now no changes can be done in object named JsUser
// JsUser.email = "Sohan@microsoft.com" 
// console.log(JsUser); // here in values of object changes done in line 35 is not present cz we used freeze


JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User,${this.name}`);
}

console.log(JsUser.greeting());  
console.log(JsUser.greetingTwo()); 