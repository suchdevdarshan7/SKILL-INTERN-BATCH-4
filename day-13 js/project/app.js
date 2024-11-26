let images = ["https://cdn.pixabay.com/photo/2024/11/05/07/09/elephants-9175178_640.jpg",
    "https://cdn.pixabay.com/photo/2024/11/03/22/57/dogs-9172481_640.jpg",
    "https://cdn.pixabay.com/photo/2024/03/16/10/02/spring-8636733_640.jpg",
    "https://cdn.pixabay.com/photo/2024/11/03/09/29/bird-9170927_640.jpg"
]

let image = document.querySelector('img');

let imageIndex = 0;

function NextImage() {

    if (imageIndex < images.length) {
        imageIndex++;
        image.src = images[imageIndex];
    }
    else {
        imageIndex = 0;
        image.src = images[imageIndex]
    }
}


function PrevImage() {
    if (imageIndex > 0) {
        imageIndex--;
        image.src = images[imageIndex];
    }
    else {
        imageIndex = images.length - 1;
        image.src = images[imageIndex]
    }
}