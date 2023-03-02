import { NegociacaoController } from "../controllers/negociacaoControllers.js";

const negociacaoController = new NegociacaoController();
const btnEnviar = document.querySelector("#registrar-negociacao");
const btnFiltrar=document.querySelector('#filtrar');


// chama o metodo criar negociação quando clica no botão registrar negociação
btnEnviar.addEventListener('click', (event) => {
    event.preventDefault();
    negociacaoController.criarNegociacao();
});
//chama o metodo filtrar quando clica no botão filtrar
btnFiltrar.addEventListener('click',(event)=>{
    event.preventDefault();
    negociacaoController.filtrarNegociacao();
})

//controlar o input de ações limitando o minimo e maximo
const inputQuantidade = document.querySelector('#quantidade-vendida');
inputQuantidade.addEventListener('input', () => {
    const valorDigitado = parseInt(inputQuantidade.value);
    if (valorDigitado<1) {
        inputQuantidade.value = 1;
    } if(valorDigitado > 100){
        inputQuantidade.value=100;
    }
});

