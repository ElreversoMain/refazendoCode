export class Comprador{
    constructor(
        private id:string,
        private name:string,
        private email:string,
        private senha:string,
    ){
        this.id=id
        this.name=name
        this.email=email
        this.senha=senha
    }
    public Getid(){
        return this.id
    }
    public GetName(){
        return this.name
    }
    public GetEmail(){
        return this.email
    }
    public GetSenha(){
        return this.senha
    }
}

