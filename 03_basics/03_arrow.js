const user = {
    username: "Sohan",
    price:999,
    welcomeMessege: function(){
        console.log(`${this.username} , Welcome to website`);
        // console.log(this); // here this talks about current values
    }

}

// user.welcomeMessege()
// user.username = "Hitesh"
// user.welcomeMessege()

// console.log(this); // here we are in node environment and
// in this environment "this" keyword returns empty object

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
//     // -> undefined cz this notations will only work in objects , not in functions
// }
// chai()

// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()

const chai = () =>{
    let username = "hitesh"
    console.log(this);
}
// chai()

// const addTwo = (num1,num2) => {
//     return num1+num2
// }

// const addTwo = (num1,num2) => num1+num2  // implicit return is written like this
// const addTwo = (num1,num2) => (num1+num2)  
const addTwo = (num1,num2) => ({username:"Sohan"})


console.log(addTwo(3,4));

