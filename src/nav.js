const elemento = document.querySelector('.hover');
const elemento2 = document.querySelector('.hover2');
const elemento3 = document.querySelector('.hover3');
const elemento4 = document.querySelector('.hover4');
const elemento5 = document.querySelector('.hover5');
const elemento6 = document.querySelector('.hover6');

const img = document.getElementById("img-red")
const img2 = document.getElementById("img-red2")
const img3 = document.getElementById("img-red3")
const img4 = document.getElementById("img-red4")
const img5 = document.getElementById("img-red5")
const img6 = document.getElementById("img-red6")



function hover() {
    if(img != img2 != img3 != img4 != img5 != img6) {
        // Removendo as classes
        removeClass();

        // Adicionando as classes
        img.setAttribute('src','assets/icones_home/icones_categorias/som-e-video-vermelho.svg');
        elemento.classList.add("active");
    }
};

function hover2() {
    if(img2 != img != img3 != img4 != img5 != img6) {
        // Removendo as classes
        removeClass();
        
        // Adicionando as classes
        img2.setAttribute('src','assets/icones_home/icones_categorias/farois-lanternas-vermelho.svg');
        elemento2.classList.add("active");
    }
};

function hover3() {
    if(img3 != img != img2 != img4 != img5 != img6) {
        // Removendo as classes
        removeClass();
        
        // Adicionando as classes
        img3.setAttribute('src','assets/icones_home/icones_categorias/acessorios-internos-vermelho.svg');
        elemento3.classList.add("active");
    }
};
function hover4() {
    if(img4 != img != img2 != img3 != img5 != img6) {
        // Removendo as classes
        removeClass();
        
        // Adicionando as classes
        img4.setAttribute('src','assets/icones_home/icones_categorias/acessorios-externos-vermelho.svg');
        elemento4.classList.add("active");
    }
};
function hover5() {
    if(img5 != img != img2 != img3 != img4 != img6) {
        // Removendo as classes
        removeClass();
        
        // Adicionando as classes
        img5.setAttribute('src','assets/icones_home/icones_categorias/vestuarios-vermelho.svg');
        elemento5.classList.add("active");
    }
};
function hover6() {
    if(img6 != img != img2 != img3 != img4 != img5) {
        // Removendo as classes
        removeClass();
        
        // Adicionando as classes
        img6.setAttribute('src','assets/icones_home/icones_categorias/infantil-vermelho.svg');
        elemento6.classList.add("active");
    }
};

function removeClass(){
    img.setAttribute('src','assets/icones_home/icones_categorias/som-e-video-cinza.svg');
    elemento.classList.remove("active");

    img2.setAttribute('src','assets/icones_home/icones_categorias/farois-lanternas-cinza.svg');
    elemento2.classList.remove("active");

    img3.setAttribute('src','assets/icones_home/icones_categorias/acessorios-internos-cinza.svg');
    elemento3.classList.remove("active");

    img4.setAttribute('src','assets/icones_home/icones_categorias/acessorios-externos-cinza.svg');
    elemento4.classList.remove("active");

    img5.setAttribute('src','assets/icones_home/icones_categorias/vestuarios-cinza.svg');
    elemento5.classList.remove("active");

    img6.setAttribute('src','assets/icones_home/icones_categorias/infantil-cinza.svg');
    elemento6.classList.remove("active");
}