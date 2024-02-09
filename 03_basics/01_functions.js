

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

console.log(result);

function loginUserMessege(username){
    if(username === undefined) // if(!username) // works same
    {
        console.log("Please Enter a username");
        return
    } 
    return `${username} just logged in`
}
// console.log(loginUserMessege("Sohan"));
console.log(loginUserMessege());