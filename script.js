const numeroSenha = document.querySelector('.parametro-coluna__senha');
let tamanhoSenha = 12; 

numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelector('parametro-senha__botao');

botoes[0].onclick = diminuirTamanho;
botoes[1].onclick = aumentarTamanho;

function diminuirTamanho(){
     //tamanhoSenha = tamanhoSenha-1;
    if (tamanhoSenha > 1){
        tamanhoSenha--;
         numeroSenha.textContent = tamanhoSenha;
    }
}

function aumentarTamanho(){
    if (tamanhoSenha > 20){
      tamanhoSenha++;
     numeroSenha.textContent = tamanhoSenha;
    }
}