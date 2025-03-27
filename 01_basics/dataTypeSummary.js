//Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.4

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

// const BigNumber = 86640326326408236186043156n

//Reference (Non- Primitive)
//Array, Objects, Function

const hero = ["spiderman", "azam", "ironman"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");

}

console.log(typeof BigNumber)