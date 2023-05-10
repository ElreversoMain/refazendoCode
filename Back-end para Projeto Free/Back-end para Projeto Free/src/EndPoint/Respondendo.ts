import {Request,Response} from "express"
import connection from "../BaseDatabase"

export const ResponderMessage=async(res:Response,req:Request)=>{
    let ErrorCode=400
    try{
        const name=req.body.name
        const hora=req.body.hora
        const comentario=req.body.comentario

        if(!name||!hora||!comentario){
        throw new Error("need put name , hora and comentario ")
    }

    }catch{

    }
}