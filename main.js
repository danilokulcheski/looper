//criando/declarando a função tocaSom com parametro idElementoAudio
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
// chamando/invocando a função tocaSomPom
document.querySelector('.tecla_pom').onclick = tocaSom;

//criando a referencia constante listaDeTeclas
const listaDeTeclas = document.querySelectorAll('.tecla');

//atribuindo o clique no botão "0" que é 1 item da lista de teclas.
listaDeTeclas[0].onclick = tocaSomPom;
//criando referencia variável, atribuindo o valor inicial como "0"
let contador = 0;
//Criando o código de repetição WHILE
//enquanto o contador for menos que o comprimento da lista, tocará o som.
while(contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onclick = tocaSomPom;
    contador = contador + 1;
    console.log(contador);
}
