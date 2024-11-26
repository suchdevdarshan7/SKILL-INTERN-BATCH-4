//! Dry --> do not repeat yourself

function greet() {
    console.log("Hello welcome to this course!")
}

// greet();


// ! Types of function: 

// ^ 1. Anonmyous function

// function (){} ==> we will use it 

//^ 2. Arrow functions 

// a = () => {
//     console.log("Welcome")
// }

// a()

//^ 3. Named functions

// function SomeNameToTheFunction() {
//     console.log("Hi")
// }
// SomeNameToTheFunction()

//^ 4. Functions with expressions

a = function () {
    console.log("Hi this is function with expression")
}

// a()

//^ 5. IIFE functions or self invoked functions

// (function () {
//     console.log("HI this iife")
// })

//^ 6. Higher order functions

// function HOF(cb) {
//     cb();
//     console.log("this is higher order function")
// }

//^ 7. Callback functions

// function cb() {
//     console.log("This is a callback function")
// }

// HOF(cb)

