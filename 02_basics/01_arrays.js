// array

const myArr = [0,1,2,3,4,5] 
const myHeros = ["Ironman","Batman","Spiderman"]
/* JavaScript arrays are resizable and can contain a mix of different data types.
 (When those characteristics are undesirable, use typed arrays instead.)
 
JavaScript array-copy operations create shallow copies.
(All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
  */
const myArr2 = new Array(1,2,3,4)

// console.log((myArr[1]));

// array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) // adds given element at index 0 means at the start of array
// myArr.shift() // removes element at 0 index means first element

// console.log((myArr.includes(9))); // returns bool true or false if 9 is present or not
// console.log(myArr.indexOf(9)); // returns -1 as 9 is not in  array

// const newArr = myArr.join() // binds myArr data in newArr but in string format

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//slice,splice

console.log("A " , myArr);
const myn1 = myArr.slice(1,3) 
// it **only shows** value till given range till last range -1 
console.log(myn1);
console.log("B " , myArr);

const myn2 = myArr.splice(1,3)
// splice **cuts** the elements from main array till range last value(not till range -1 like slice)
console.log("C " , myArr);
console.log(myn2);