// //Primitive

// // 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt


// const score = 100
// const scoreValue = 100.4

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id == anotherId);

// // const BigNumber = 86640326326408236186043156n

// //Reference (Non- Primitive)
// //Array, Objects, Function

// const hero = ["spiderman", "azam", "ironman"];
// let myObj = {
//     name: "hitesh",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("Hello world");

// }

// console.log(typeof BigNumber)


//*************************************************** */

//Memoryy
// Stack(primitive) and Heap(non-primitive)

//Stack
let myYoutubename = "Lpu ka ladkaa"
let anothername = myYoutubename
anothername = "Jimmy is live"
console.log(myYoutubename) // real name
console.log(anothername) // real name ki copy ko change krta h

//Heap
let userOne = {
    email : "user@gmail.com",
    upi : "rishav@ybl"
}

//refernce same jgha se hi milta h

let userTwo = userOne

userTwo.email = "ashwani@gmail.com"

console.log(userOne.email)
console.log(userTwo.email) // same hi email aayega dono ka coz ye sb ek hi jgha se refrence(original value) lere h.
