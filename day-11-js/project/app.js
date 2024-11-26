imageOne = "https://cdn.pixabay.com/photo/2024/10/23/18/54/squirrel-monkeys-9143848_640.jpg"
imageTwo = "https://cdn.pixabay.com/photo/2024/11/02/15/31/cat-9169528_640.jpg";
imageThree = "https://cdn.pixabay.com/photo/2024/02/23/23/58/dog-8593014_640.jpg"
imageFour = "https://cdn.pixabay.com/photo/2024/02/26/19/57/dog-8598827_640.jpg";


imageSelector = document.getElementsByTagName('img');

imageTag = imageSelector[0];

imageNumber = 1;

function ChangeToNextImage() {
    if (imageNumber === 1) {
        imageTag.src = imageOne;
    }
    else if (imageNumber === 2) {
        imageTag.src = imageTwo;
    }
    else if (imageNumber === 3) {
        imageTag.src = imageThree;
    }
    else if (imageNumber === 4) {
        imageTag.src = imageFour;
    }
    else {
        imageNumber = 0;
    }
    imageNumber++;
}
function ChangeToPreviousImage() {
    console.log(imageNumber)
    if (imageNumber === 1) {
        imageTag.src = imageOne;
    }
    else if (imageNumber === 2) {
        imageTag.src = imageTwo;
    }
    else if (imageNumber === 3) {
        imageTag.src = imageThree;
    }
    else if (imageNumber === 4) {
        imageTag.src = imageFour;
    }
    else {
        imageNumber = 5;
    }
    imageNumber--;
}


