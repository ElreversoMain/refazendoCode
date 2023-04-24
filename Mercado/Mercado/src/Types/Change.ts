export class Change{
    constructor(
        private id:string,
        private quantidade:string,
        private produto:string
    )
    {
        this.id=id
        this.produto=produto
        this.quantidade=quantidade
    }
    public GetId(){
        return this.id
    }
    public GetProduto(){
        return this.produto
    }
    public GetQuandidade(){
        return this.quantidade
    }
}