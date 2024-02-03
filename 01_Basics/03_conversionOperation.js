let score= undefined

console.log(typeof score);
console.log(typeof (score));

let valueInNumber=Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber) 
/* when valueInNumber=33abc or undefined or any string like "sohan" then output will be NaN -> Not a Number 
   Nan is a special type
   when valueInNumber=null then output will be 0
   when valueInNumber=true then output will be 1
*/

let isLoggeIn="Sohan"
let booleanIsLoggedIn = Boolean(isLoggeIn)
console.log(booleanIsLoggedIn) 
/* 
here isLoggedIn was 1 then the output was true
now input was ""(means empty string) then output was false
now input was "Sohan" then output was true
*/ 

let someNumber=33

let stringNumber=String(someNumber)
console.log(stringNumber) // -> 33
console.log(typeof(stringNumber)) // -> string