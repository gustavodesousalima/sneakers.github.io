const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "Black",
                img: "/img/air.png",
            },
            {
                code: "darkblue",
                img: "/img/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 149,
        colors: [
            {
                code: "lightfray",
                img: "/img/jordan.png",
            },
            {
                code: "green",
                img: "/img/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
            {
                code: "lightgray",
                img: "/img/blazer.png",
            },
            {
                code: "green",
                img: "/img/blazer2.png",
            },
        ],

    },
    {
        id: 4,
        title: "Crater",
        price: 109,
        colors: [
            {
                code: "black",
                img: "/img/crater.png",
            },
            {
                code: "lightgray",
                img: "/img/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
            {
                code: "gray",
                img: "/img/hippie.png",
            },
            {
                code: "black",
                img: "/img/hippie2.png",
            },
        ],
    },
];

let choosenProduct = products[0];

const currentProductimg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

//Função responsável por adicionar linha abaixo do botão selecionado
function underline(botao) {
    // Remover a classe 'clicked' de todos os botões
    var botoes = document.querySelectorAll('h3');
    botoes.forEach(function (b) {
        b.classList.remove('clicked');
    });

    // Adicionar a classe 'clicked' apenas ao botão clicado
    botao.classList.add('clicked');
}

//Função responsável pela transição do slider sneakers
menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //Muda o slide atual
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //Muda a escolha atual
        choosenProduct = products[index];

        //Alterar texto do produto atual
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "R$ " + choosenProduct.price + ",00";
        currentProductimg.src = choosenProduct.colors[0].img

        //Atribuir novas cores
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });

    });
});

currentProductSizes.forEach((sizes, index) => {
    sizes.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white"
            size.style.color = "black"
        });
        sizes.style.backgroundColor = "black"
        sizes.style.color = "white"
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductimg.src = choosenProduct.colors[index].img
    })
})

//Funções para ativar a tela de pagamento
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex"
});

close.addEventListener("click", () => {
    payment.style.display = "none"
});