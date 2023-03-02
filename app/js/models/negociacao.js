export class Negociacao{
    #data
    #quantidade
    #valor
    #valorTotal

    constructor(data,quantidade,valor) {
        this.#data = new Date(data.getTime());
        this.#quantidade=quantidade;
        this.#valor=valor;
        this.#valorTotal= this.calculaValorTotal();
    }
calculaValorTotal(){
        return this.#quantidade*this.#valor;
}
    get data() {
        //formata a data para dd/mm/ano
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return this.#data.toLocaleDateString('pt-BR', options);
    }
    get quantidade(){
        return this.#quantidade;
    }
    get valor(){
        return this.#valor;
    }
    get valorTotal()
    {
        return this.#valorTotal;
    }
}