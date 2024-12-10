// console.log(document.body)
// console.log(document.head)


// document.body.childNodes[1].style.backgroundColor = "blue";


// document.body.childNodes[1].classList.add('active')

// ! dom selectors


// document.getElementsByTagName()
// document.querySelector()
// document.querySelectorAll()
// document.getElementsByClassName()

//~ Document.getElementbyid:

// const ThirdHeading = document.getElementById('heading__third');
// ThirdHeading.classList.add('active');


// ~ Document.getElementsByClassName()


// const selectClasses = document.getElementsByClassName('select');

// console.log(selectClasses)


//~ Document.getElementsByTagName()


// const headings = document.getElementsByTagName('h1');

// console.log(headings)

//~ Document.querySelector()

// const heading = document.querySelector('h1')

// console.log(heading)

//~ Document.querySelectorAll()


// const headings = document.querySelectorAll('#heading__third')

// console.log(headings)



const ThirdHeading = document.getElementById('heading__third');
let value = false;

// function handleClickOfHeading() {
//     if (value) {
//         ThirdHeading.classList.remove('active');
//         value = false;

//     } else {
//         ThirdHeading.classList.add('active');
//         value = true;
//     }
// }

function handleClick() {
    ThirdHeading.classList.toggle('active');
}