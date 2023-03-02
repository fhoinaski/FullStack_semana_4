import {Negociacao} from "../models/negociacao.js";
import {ListaNegociacao} from "../models/listaNegociacao.js";
import {NegociacoesView} from "../views/NegociacoesView.js";

export class NegociacaoController {
    #campoData;
    #campoQuantidade;
    #campoValor;

    #listaNegociacao = new ListaNegociacao();
    #negociacoesView = new NegociacoesView();

    // construtor que pega os elementos do formulario
    constructor() {
        //pega o campo de data do formulario e salva e atribui ao #campoData
        this.#campoData = document.getElementById('data-transacao');
        this.#campoQuantidade = document.getElementById('quantidade-vendida');
        this.#campoValor = document.getElementById('valor-negociacao');
        this.filtro = document.getElementById('valorFiltro');
    }

    criarNegociacao() {
        //instacia um objeto do tipo data
        let data = new Date(this.#campoData.value);
        // cria uma variavel com nome quantidade e atribui a variavel do construtor pegando os valores
        let quantidade = parseInt(this.#campoQuantidade.value);
        let valor = parseFloat(this.#campoValor.value);

        /*cria uma variavel comnome negociaçao que recebe uma nova negociaçao da classe Negociaçao dando como parametro os objetos acima data, quantidade e valor*/
        let negociacao = new Negociacao(data, quantidade, valor);
        this.#listaNegociacao.adicionarNegociacao(negociacao);
        this.#negociacoesView.adicionarNegociacao(negociacao);
    }

    filtrarNegociacao() {
        let valorFiltro = this.filtro.value;
        console.log(valorFiltro);
        let negociacoesFiltradas = this.#listaNegociacao.filtrarNegociacoesPorValor(valorFiltro);
        console.log(negociacoesFiltradas);
        this.#negociacoesView.atualizarFiltro(negociacoesFiltradas);
    }

}
