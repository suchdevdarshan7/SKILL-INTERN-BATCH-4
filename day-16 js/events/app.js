const button = document.getElementById('btn');

console.log(button)

let count = 0;

const eventFunction = () => {
    ++count;
    document.body.classList.toggle('active');
    if (count === 1) {
        button.removeEventListener('click', eventFunction);
    }

}


button.addEventListener('click', eventFunction);


button.addEventListener('dblclick', () => {
    button.style.backgroundColor = "green";
})




