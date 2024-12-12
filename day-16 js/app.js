// ! Synchronous

// console.log("The earth is rotating")

// console.log("The earth is also revolving around sun")

// console.log("The sun is biggest star")

// ! Asynchronous way

// setTimeout(() => {
//     console.log('The earth is rotating')
// }, 1000); //! 1 sec time 1000ms == 1s

// console.log("The earth is also revolving around sun")

// console.log("The sun is biggest star")



// ! Settimeout
//
// ~ It will work only once

// setTimeout(() => {
//     console.log('This should work after 5 sec')
// }, 5000)

// setInterval(() => {
//     console.log("Hi i am working")
// }, 1);


// const value = 10;
// let counter = 0;

// const counterInterval = setInterval(() => {
//     ++counter;
//     console.log(`The interval number is ${counter}`);

//     if (counter === 10) {
//         clearInterval(counterInterval);
//     }
// }, 1000)