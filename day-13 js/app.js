let mark1 = 100;
let mark2 = 200;
let mark3 = 300;

// int marks[] = {1,2,3,4,5};

// let marks = [100, 200, 300, "string", false, 10.2];
// //           0     1    2     3       4        5

// console.log(marks.length)

// console.log(marks[6]);

// ! pop()


// let mars = [1, 2, 3, 4, 5];

// console.log('Before popping')
// console.log(mars)

// console.log(mars.pop());

// console.log('After popping')
// console.log(mars)



// console.log('Before pushing')
// console.log(colors)
// console.log(colors.push("Orange"))

// console.log('After pushing')
// console.log(colors)

let colors = ["red", "green", "blue", 'Yellow'];

// const isRedIncluded = colors.forEach((element, index, array) => {
//     return element === "red";
// })

// console.log(isRedIncluded)

// const isRedIncluded = colors.map((el, id, array) => {
//     return el === 'red';
// })

const isRedIncluded = colors.filter((el, idx, array) => {
    return el === "blue";
})

