export type Atleta={
    id:Number
    atleta:string
    competicao:string
    unidade:string
    value:string

}

export class Cadastro{
    constructor(
        private id:string,
        private atleta:string,
        private competicao:string,
        private unidade:string,
        private value:string
    ){
        this.id=id
        this.atleta=atleta
        this.competicao=competicao
        this.unidade=unidade
        this.value=value
    }
    public getId(){
        return this.id
    }
    public getAtleta(){
        return this.atleta
    }
    public getCompeticao(){
        return this.competicao
    }
    public getUnidade(){
        return this.unidade
    }
    public getValue(){
        return this.value
    }
}

export type Atletinha={
    id:string
    atleta:string
    competicao:string
    unidade:string
    value:string
}