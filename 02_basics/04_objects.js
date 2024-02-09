// const  tinderUser = new Object() // -> it is an singleton object
const tinderUser = {} // -> it is an normal object // rest both are same

tinderUser.id = "123abc"
tinderUser.name="Sohan"
tinderUser.isLoggedIn= false

// console.log(tinderUser);

const regularUser ={
    email:"abc@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sohan",
            lastname: "Das"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}

// const obj3 = { obj1,obj2 }

/* Object.assign()
The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object.
 It returns the modified target object. */

// const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1,...obj2} // works same as object.assign() and we will use this always

// console.log(obj3);

const users = [
    {
        id:1,
        email:"abc@gmail.com"
    },
    {
        id:1,
        email:"abc@gmail.com"
    },
    {
        id:1,
        email:"abc@gmail.com"
    },
    {
        id:1,
        email:"abc@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)) // o/p -> [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // o/p ->  ['123abc', 'Sohan', false ]
console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Sohan' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // tells if given property is present in object or not
