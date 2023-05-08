import {Request,Response} from "express"
import connection from "../BaseDatabase"

export const CreateTittle=async(req:Request,res:Response)=>{
    try{
        const name=req.body.name
        const titulo=req.body.titulo
        const hora=req.body.hora
        const comentariomy=req.body.comentariomy
        const comentarios=[]

        if(!name||!titulo||!hora||!comentariomy){
            throw new Error("you need put you register")
        }

    }catch{

    }
}