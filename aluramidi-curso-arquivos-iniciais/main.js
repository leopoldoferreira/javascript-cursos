function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

//document.querySelector('.tecla_pom').onclick = tocaSomPom;
const listaDeTeclas = document.querySelectorAll('.tecla');

// let i = 0;
// while (i < listaDeTeclas.length) {
for (let i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i]
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){ //função anonima
        tocaSom(idAudio)
    }
    //se while: i += 1
}