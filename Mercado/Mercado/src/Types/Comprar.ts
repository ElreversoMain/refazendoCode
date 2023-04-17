export class Buying{
    constructor(
        private id:string,
        private produto:string,
        private descricao:string,
        private quantidade:string,
        private preço:string

    ){
        this.id=id
        this.produto=produto
        this.descricao=descricao
        this.quantidade=quantidade
        this.preço=preço
    }
    public Getid(){
        return this.id
    }
    public Getproduto(){
        return this.produto
    }
    public Getdescricao(){
        return this.descricao
    }
    public Getquantidade(){
        return this.quantidade
    }
    public Getpreco(){
        return this.preço
    }
}