const name="Sohan"
const repoCount = 50

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('Sohan-game-yo')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('o'));

const newString = gameName.substring(0,4) 
// we dont use negative indexing normally in .substring() but if we do use that , say (-4,2)
// it will ignore the negative indexing and start the slicing from 0 to given number
console.log(newString);

const anotherString = gameName.slice(-8,4)
// we can use negative indexing in .slice()
console.log(anotherString);

const newString1 = "  Sohan  "
console.log(newString1);
console.log(newString1.trim()); // It eliminates only the starting and end spaces
// The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.
//To return a new string with whitespace trimmed from just one end, use trimStart() or trimEnd().

const url = "https://sohan.com/sohan%20das"

console.log(url.replace('%20','-')) // it replaces %20 with -

console.log(url.includes('sohan')) // tells if given value is there or not

console.log(gameName.split('-')); // makes array of string from any string by given seperator

