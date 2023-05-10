import {Request,Response} from "express"
import connection from "../BaseDatabase"
import {CriarComentario} from "../Types/CriarComentario"


export const CreateTittle=async(req:Request,res:Response)=>{
    let ErrorCode=400
    try{
        const name=req.body.name
        const titulo=req.body.titulo
        const hora=req.body.hora
        const comentariomy=req.body.comentariomy

        if(!name||!titulo||!hora||!comentariomy){
            throw new Error("you need put you register")
        }
        const findTittle=await connection("CreateTwitter")
        .select()
        .where({name})

        if(findTittle.length>=2){
            throw new Error("2 post for one name ")
        }
        const createAccount=new CriarComentario(
            Date.now().toString(),
            name,
            titulo,
            hora,
            comentariomy,
            
        
        )
        await connection("CreateTwitter").insert({
            id:createAccount.GetID(),
            name:createAccount.GetName(),
            titulo:createAccount.GetTitulo(),
            hora:createAccount.GetHora(),
            comentariomy:createAccount.GetComentarios(),

        })
        res.status(201).send({message:"You post was create congratulations",CriarComentario:CriarComentario})
    }catch(error:any){
        res.status(ErrorCode).send({message:error.message})

    }
}