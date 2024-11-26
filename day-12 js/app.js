//! var a = 10; // es 1

//! let , const // es 6


//! declaration, initialzation , declaration and intialzation
//! redeclaration reintialzation

//! 1. var

//& You can delcare intialize , declare and intialize in the same line redeclare and reintialize this is only possible in var keyword

// var a;
// a = 1;

// var a = 10;

// var a;

// a = 20;

// console.log(a)

//! 2. let keyword

//& You can delcare intialize , declare and intialize in the same line and reintialize this is only possible in let keyword

//& redeclaration of let keyword is not possible


// // let b;
// // b = 10;

// let b = 20;
//let b; //~ Uncaught SyntaxError: Identifier 'b' has already been declared

// b = 40;

// console.log(b)

//! 3. const keyword


//& You can declare and intialize in the same line this is only possible in const keyword

//& Any other operations on const keyword will give you errors

//const value; //~ Uncaught SyntaxError: Missing initializer in const declaration

// value = 10;

// console.log(value)

// const value = 10;

//const value; //~Uncaught SyntaxError: Identifier 'value' has already been declared

//value = 30; //~Uncaught TypeError: Assignment to constant variable

// console.log(value)



//! Hoisting and temporal dead zone

//& Hoisting is JavaScript's default behavior of moving all declarations to the top only with var keyword

// console.log(a);

// var a = 10;


//! Temporal dead zone

//& Temporal dead zone : Before intialzation and declaration if you try to access a variable declared using let and const keywords it is called tdz

//console.log(b) //~Uncaught ReferenceError: Cannot access 'b' before initialization

// let b = 10;

//greet()
//arrow() //~ Uncaught ReferenceError: Cannot access 'arrow' before initialization

//& arrow functions cannot be hoisted but named functions can be hoisted

// function greet() {
//     console.log('hi i am named function')
// }

// let arrow = () => {
//     console.log('Hi i am arrow')
// }



//! Scopes
//! Global scope
//& whatever things you have in global scope will be inside window object

// var a = 10;

// if (true) {
//     console.log('a is accesbile ' + a)
// }


// console.log(a)

//& let and const are from script scope


// let b = 10;

// console.log(b)



// if (true) {
//     var a = 30;
// }

// console.log(a)

//! var is a function scoped keyword

// function greet() {
//     var a = 10;
// }

// console.log(a)


// function greet() {
//     let a = 10;
// }

// console.log(a)