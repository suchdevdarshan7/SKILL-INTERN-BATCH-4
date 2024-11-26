const products = [
    {
        id: 1,
        name: "Apple Iphone",
        price: 1000,
        image: "https://cdn.pixabay.com/photo/2014/12/10/12/26/iphone-563067_640.jpg"
    },
    {
        id: 2,
        name: "Marshall Speakers",
        price: 2000,
        image: "https://cdn.pixabay.com/photo/2019/07/02/07/39/bluetooth-4311748_640.jpg"
    },
    {
        id: 3,
        name: "Realme pro earbuds",
        price: 20,
        image: "https://cdn.pixabay.com/photo/2020/05/14/09/54/earphones-5193970_640.jpg"
    },
    {
        id: 4,
        name: "Aula mechanical keyboard",
        price: 150,
        image: "https://cdn.pixabay.com/photo/2020/07/03/04/48/mechanical-keyboard-5365168_1280.jpg"
    }
]

const container = document.querySelector('.container');

function renderContent(el) {
    const html = `
        <div class="box">
            <h1>${el.name}</h1>
            <div class="image">
                <img src=${el.image} />
            </div>
            <p class="red">price is $ ${el.price}</p>
        </div>
    `

    container.innerHTML += html;
}

function DisplayProducts(products) {
    products.map((el) => {
        renderContent(el);
    })

}

DisplayProducts(products)