//Class abstrata
export class Conta{
    constructor( saldoInicial, cliente, agencia ){
        if(this.constructor == Conta){
            throw new Error("Você não deveria instancias um objeto do tipo conta Diretamente, pois essa é uma classe abstrata")
        }
        this._saldo = saldoInicial
        this._cliente = cliente
        this._agencia = agencia
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){//O instanceof é um operador que permite testar se um objeto é uma instância de um tipo específico de uma class, subclass ou interface
            this._cliente = novoValor
        }
    }

    get cliente(){
        return this._cliente
    }

    get saldo(){
        return this._saldo
    }

    //Metodo abstrato 
    sacar(valor){
        throw new Error("O método Sacar da conta é abstrato")
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado
            return valorSacado
        }

        return 0 
    }

    depositar(valor){
        if(valor <= 100)
        {
            return
        } 
        this._saldo += valor         
    }

    tranferir(valor, conta){
        if(this._tipo == "salario"){
            taxa = 1.05
        }
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
        
    }
}