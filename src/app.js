// Menu de Navegação =================================
const element = document.querySelectorAll(".nav-infos-itens li")
const img = document.querySelectorAll(".nav-infos-itens li img")
const todosDepartamento = document.querySelector(".nav-link")

for (let i = 0; i < element.length; i++) {
    element[0].onclick = () => {
        if (img) {
            // Removendo as classes
            removeClass();

            img[0].setAttribute('src', 'assets/icones_home/icones_categorias/som-e-video-vermelho.svg');
            element[0].classList.add("active");
        }

    }
}
for (let i = 0; i < element.length; i++) {
    element[1].onclick = () => {
        if (img) {
            // Removendo as classes
            removeClass();

            img[1].setAttribute('src', 'assets/icones_home/icones_categorias/farois-lanternas-vermelho.svg');
            element[1].classList.add("active");
        }

    }
}
for (let i = 0; i < element.length; i++) {
    element[2].onclick = () => {
        if (img) {
            // Removendo as classes
            removeClass();

            // Adicionando as classes
            img[2].setAttribute('src', 'assets/icones_home/icones_categorias/acessorios-internos-vermelho.svg');
            element[2].classList.add("active");
        }
    }
}
for (let i = 0; i < element.length; i++) {
    element[3].onclick = () => {
        if (img) {
            // Removendo as classes
            removeClass();

            img[3].setAttribute('src', 'assets/icones_home/icones_categorias/acessorios-externos-vermelho.svg');
            element[3].classList.add("active");
        }

    }
}
for (let i = 0; i < element.length; i++) {
    element[4].onclick = () => {
        if (img) {
            // Removendo as classes
            removeClass();

            // Adicionando as classes
            img[4].setAttribute('src', 'assets/icones_home/icones_categorias/vestuarios-vermelho.svg');
            element[4].classList.add("active");
        }
    }
}
for (let i = 0; i < element.length; i++) {
    element[5].onclick = () => {
        if (img) {
            // Removendo as classes
            removeClass();

            // Adicionando as classes
            img[5].setAttribute('src', 'assets/icones_home/icones_categorias/infantil-vermelho.svg');
            element[5].classList.add("active");
        }
    }
}

todosDepartamento.addEventListener('click', () => {
    removeClass();
})
// Removendo a imagem e cor vermelha
function removeClass() {
    img[0].setAttribute('src', 'assets/icones_home/icones_categorias/som-e-video-cinza.svg');
    element[0].classList.remove("active");

    img[1].setAttribute('src', 'assets/icones_home/icones_categorias/farois-lanternas-cinza.svg');
    element[1].classList.remove("active");

    img[2].setAttribute('src', 'assets/icones_home/icones_categorias/acessorios-internos-cinza.svg');
    element[2].classList.remove("active");

    img[3].setAttribute('src', 'assets/icones_home/icones_categorias/acessorios-externos-cinza.svg');
    element[3].classList.remove("active");

    img[4].setAttribute('src', 'assets/icones_home/icones_categorias/vestuarios-cinza.svg');
    element[4].classList.remove("active");

    img[5].setAttribute('src', 'assets/icones_home/icones_categorias/infantil-cinza.svg');
    element[5].classList.remove("active");
}

// Slider Banner =======================================

const totalSlides = document.querySelectorAll(".slider-item").length;
let currentSlide = 0;

document.querySelector(".slider-width").style.width =
    `calc(100vw * ${totalSlides})`;

document.querySelector(".slider-controles").style.height =
    `${document.querySelector('.slider').clientHeight}px`;

function goPrev() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    updateMargin();
}
function goNext() {
    currentSlide++;
    if (currentSlide > (totalSlides - 1)) {
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin() {
    let sliderWidthItem = document.querySelector('.slider-item').clientWidth;
    
    let newMargin = (currentSlide * sliderWidthItem);

    document.querySelector(".slider-width").style.marginLeft =
    `-${newMargin}px`;
}
setInterval(goNext, 5000);