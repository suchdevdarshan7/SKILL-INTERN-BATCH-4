const boxes = document.querySelectorAll('.box');

boxes.forEach((el, idx, array) => {
    el.addEventListener('click', function () {
        removeActive()
        el.classList.add('active')
    })
})

function removeActive() {
    boxes.forEach((el, idx, array) => {
        el.classList.remove('active')
    })
}