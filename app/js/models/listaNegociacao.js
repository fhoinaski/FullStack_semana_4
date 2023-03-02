export class ListaNegociacao{
    //cria um atributo com nome negociacoes que vai receber um array
#negociacoes=[];

// cria um metodo chamado adicionarNegociacoes que recebe como parametro negociacao
adicionarNegociacao(negociacao){
    this.#negociacoes.push(negociacao);
    return negociacao
}
get negociacoes(){
    return[].concat(this.#negociacoes);
}

/*metodo para filtrar os valores recebidos no input filtro e retornar umalista com negociações de valortotal iguais
 ou acima do informado */
    filtrarNegociacoesPorValor(valorMinimo) {
        return this.#negociacoes.filter(negociacao => negociacao.valorTotal >= valorMinimo);
    }

}