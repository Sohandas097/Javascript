// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString()); // Mon Feb 05 2024
// console.log(myDate.toISOString()); // 2024-02-05T16:56:41.138Z
// console.log(myDate.toJSON()); // 2024-02-05T16:56:41.138Z
// console.log(myDate.toLocaleDateString()); // 2/5/2024
// console.log(myDate.toLocaleTimeString()); // 4:56:41 PM

console.log(typeof myDate); // -> Object

// let myCreatedDate = new Date(2024,0,23)
// let myCreatedDate = new Date(2024,0,23,5,3) // here 5 , 3 goes for time
// let myCreatedDate = new Date("2024-01-14") // here 01 will be Jan as we are writing in yyyy-mm-dd format
let myCreatedDate = new Date("01-23-2024") // written in mm-dd-yyyy format 
// console.log(myCreatedDate);
console.log(myCreatedDate.toLocaleString()); // month starts from 0 for Jan in javascript
// **Only When we write like this in single digit

let myTimeStamp = Date.now()
// console.log(myTimeStamp); // it gives date in milisecond
// console.log(myCreatedDate.getTime()); // it gives the milisecond value of "myCreatedDate"
// thus in many cases we can compare these values of dates

// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate.getMonth()); // gives 1 means month is FEBRUARY
console.log(newDate.getDay()); // gives 1 means monday

newDate.toLocaleString('default', {
    weekday: "long"
})