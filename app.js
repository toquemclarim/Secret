let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela (tag, texto) {
     let campo = document.querySelector(tag);
     campo.innerHTML = texto;
     if ('speechSynthesis' in window) {
          let utterance = new SpeechSynthesisUtterance(texto);
          utterance.lang = 'pt-BR'; 
          utterance.rate = 1.2; 
          window.speechSynthesis.speak(utterance); 
      } else {
          console.log("Web Speech API não suportada neste navegador.");
      }
}


exibirTextoNaTela('h1','Jogo Secreto');
exibirTextoNaTela('p', 'Faça sua aposta entre 1 e 10');

exibirMensagemInicial();

function verificarChute() {
     let chute = document.querySelector('input').value;

     if (chute == numeroSecreto) {
          exibirTextoNaTela ('h1','Acertou, miserave!');
          let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
          let mensagemTentativas = `Voce descobriu o número secreto com ${tentativas} ${palavraTentativa} !`;
          exibirTextoNaTela ('p',mensagemTentativas);
          document.getElementById('reiniciar').removeAttribute('disabled');
     } else {
          if (chute > numeroSecreto) {
               exibirTextoNaTela('p','O número secreto é menor');
          } else {
               exibirTextoNaTela('p','O número é maior');
          }
          document.querySelector('input').value = '';
          tentativas ++;
          limparCampo();
      }    
function limparCampo() {
      chute = document.querySelector('input');
      chute.value = '';
     
}
     }

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    exibirMensagemInicial();
    document.querySelector('input').value = '';
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


function gerarNumeroAleatorio() {
     let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
     let quantidadeDeElementosDaLista = listaDeNumerosSorteados.length;
     if (quantidadeDeElementosDaLista == numeroLimite){
          listaDeNumerosSorteados = [];
     }
     if (listaDeNumerosSorteados.includes(numeroEscolhido))
          return gerarNumeroAleatorio();
     else {
          listaDeNumerosSorteados.push(numeroEscolhido);
          console.log(listaDeNumerosSorteados)
          return numeroEscolhido;
          
     }
}
function exibirMensagemInicial() {
     exibirTextoNaTela('h1','Jogo Secreto');
     exibirTextoNaTela('p', 'Faça sua aposta entre 1 e 10');
}