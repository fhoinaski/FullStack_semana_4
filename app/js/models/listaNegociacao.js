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

    filtrarNegociacoesPorValor(valorMinimo) {
        return this.#negociacoes.filter(negociacao => negociacao.valor >= valorMinimo);
    }
    forEach(fn) {
        this.#negociacoes.forEach(fn);
    }
}