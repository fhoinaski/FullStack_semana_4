import { NegociacaoController } from "../controllers/negociacaoControllers.js";

const negociacaoController = new NegociacaoController();
const btnEnviar = document.querySelector("#registrar-negociacao");
const btnFiltrar=document.querySelector('#filtrar');

btnEnviar.addEventListener('click', (event) => {
    event.preventDefault();
    negociacaoController.criarNegociacao();
});
btnFiltrar.addEventListener('click',(event)=>{
    event.preventDefault();
    negociacaoController.filtrarNegociacao();
})