//criando/declarando a função tocaSom com parametro idElementoAudio
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
//criando a referencia constante listaDeTeclas
const listaDeTeclas = document.querySelectorAll('.tecla');
//criando referencia variável, atribuindo o valor inicial como "0"

//Criando o código de repetição WHILE e mudando para FOR
//enquanto o contador for menos que o comprimento da lista, tocará o som.
for(let contador = 0;contador < listaDeTeclas.length;contador = contador++){
    const tecla = listaDeTeclas[contador];
    const efeito = tecla.classList[1]; //chama a classe do indice 1 do som
    const idAudio = `#som_${efeito}`; //junção com template string
    tecla.onclick = function(){ //função anonima para tocaSom
        tocaSom(idAudio);
    }
    tecla.onkeydown = function (evento) { //função para tecla pressionada
       if (evento.code === 'Space' || evento.code === 'Enter'){
         tecla.classList.add('ativa');
       }
    }
    tecla.onkeyup = function(){ //função para tecla despressionada
        tecla.classList.remove('ativa');
    }
}
