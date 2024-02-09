

function sayMyName(){
console.log("S");
console.log("O");
console.log("H");
console.log("A");
console.log("N");
}

// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2)
// }

function addTwoNumbers(number1,number2){
    return(number1+number2)
}
const result = addTwoNumbers(3,5)

// console.log(result);

function loginUserMessege(username){
    if(username === undefined) // if(!username) // works same
    {
        console.log("Please Enter a username");
        return
    } 
    return `${username} just logged in`
}
// console.log(loginUserMessege("Sohan"));
// console.log(loginUserMessege());


function calculateCartPrice(val1,val2,...num1){
    return num1 // o/p -> [500,2000] cz val1 and val2 got 200 and 400 || at last ... got remaining in num1
}

console.log(calculateCartPrice(200,400,500,2000))

const user = {
    username: "Sohan",
    price: "199"
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username:"Sohan",
    price:"399"
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray)); // 400
console.log(returnSecondValue([100,856,542,652])); // 856
