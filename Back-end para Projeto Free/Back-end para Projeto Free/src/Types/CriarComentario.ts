import { comentarios } from "./ComentarioSobre"

export  class CriarComentario{
    constructor(
        private id:string,
        private name:string,
        private titulo:string,
        private hora:number,
        private comentariomy:string,
        private comentarios:[comentarios]

    ){
        this.id=id
        this.name=name
        this.titulo=titulo
        this.hora=hora
        this.comentariomy=comentariomy
        this.comentarios=comentarios
    }
    public GetID(){
        return this.id
    }
    public GetName(){
        return this.name
    }
    public GetTitulo(){
        return this.titulo
    }
    public GetHora(){
        return this.hora
    }
    public GetComentariomy(){
        return this.comentariomy
    }
    public GetComentarios(){
        return this.comentarios
    }
    
}