const botonHtml = document.querySelector('#boton');
const linksHtml = document.querySelector('#links');


botonHtml.addEventListener('click', e => {
    linksHtml.classList.toggle('collapsed')
})