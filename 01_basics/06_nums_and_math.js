// const score = 400
// console.log(score);

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length)
// console.log(balance.toFixed(2)) // used to show precision value (useful in e-commerce)

// const otherNumber = 23.6869

// console.log(otherNumber.toPrecision(4)); // gives precise value upto given number of places
// // for example if we give 23.45642 and pass 4 then o/p -> 23.46
// const hundreds = 1000000
// console.log(hundreds.toLocaleString()); // -> 1,000,000
// console.log(hundreds.toLocaleString('en-In')); // -> 10,00,000

// console.log(Number.MAX_VALUE) // shows max value supported by js
// console.log(Number.MIN_VALUE) // shows min value supported by js

//*******************************MATHS**********************************//

// console.log(Math);
// console.log(Math.abs(-6)); // converts neg to pos values
// console.log(Math.round(4.83)); // rounds of the number
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.1));
// console.log(Math.min(4,6,4,5));
// console.log(Math.max(4,6,4,5));

console.log(Math.random()); // gives random value between 0 and 1
console.log((Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1))+ min)