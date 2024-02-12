//for each loop
// The forEach() method of Array instances executes a provided function once for each array element.

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){ //  no name is given to the callback function
//     console.log(val);
// } )

// coding.forEach( (item) => { // here function is written as arrow function
//     console.log(item);
// } )

// function printMe(item){ // created a function
//     console.log(item);
// }

// coding.forEach(printMe) // passed that function as parameter

// coding.forEach( (item, index, arr)=> { // in every iteration forEach has access of 3 things - 
// 1. item or value , 2. index , 3. arr means whole array

//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )