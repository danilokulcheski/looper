//criando/declarando a função tocaSomPom
function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}
// chamando/invocando a função tocaSomPom
document.querySelector('.tecla_pom').onclick = tocaSomPom;

//criando a referencia constante listaDeTeclas
const listaDeTeclas = document.querySelectorAll('.tecla');

//atribuindo o clique no botão "0" que é 1 item da lista de teclas.
listaDeTeclas[0].onclick = tocaSomPom;
//criando referencia variável, atribuindo o valor inicial como "0"
let contador = 0;
//Criando o código de repetição WHILE
while(contador < 9) {
    listaDeTeclas[contador].onclick = tocaSomPom;
    contador = contador + 1;
    console.log(contador);
}
