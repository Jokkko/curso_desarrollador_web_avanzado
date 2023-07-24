import './scss/style.scss'

const webdev = document.querySelector('#webdev'); /* Seleccionar un elemento por id */
const guy = document.querySelector('#guy'); /* Seleccionar un elemento por id */

const webdev2 = document.querySelector('#webdev2');
const guy2 = document.querySelector('#guy2');

window.addEventListener('scroll', function(){/* Detecto que el usuario scrolleo */
    /* Una vez que se detecta el scroll se ejecuta function */
    /* console.log('scroll'); */
    let posObj = webdev.getBoundingClientRect().top;
    let posObj2 = webdev2.getBoundingClientRect().top;
    /* Devuelve la posicion del elemento respecto del borde del navegador */
    /* console.log(posObj); */

    if (posObj < 600) {
        webdev.style.animation = 'left-to-right 2s forwards';
        guy.style.animation = 'right-to-left 2s forwards';
    }
    if(posObj2 < 700){
        webdev2.style.animation = 'left-to-right 2s forwards';
        guy2.style.animation = 'right-to-left 2s forwards';
    }
})  
