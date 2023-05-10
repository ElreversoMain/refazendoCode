export class comentariosPerson{
    constructor(  
     private name:string,
     private hora:number,
     private comentario:string
    ){
        this.name=name
        this.hora=hora
        this.comentario=comentario
    }
    public GetName(){
        return this.name
    }
    public GetHora(){
        return this.hora
    }
    public GetComentario(){
        return this.comentario
    }
}