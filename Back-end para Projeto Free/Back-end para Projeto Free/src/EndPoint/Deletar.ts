import {Request,Response} from "express"
import connection from "../BaseDatabase"

export const Delete=async(req:Request,res:Response)=>{
    let ErrorCode=400
    try{ 
        let id=req.query.id as string

        const deletar=await connection("CreateTwitter")
        .where("id","like",`%${id}%`)
        .delete()

        res.status(201).send({message:"produto deletado",deletar})

    }catch(error:any){

        res.status(ErrorCode).send({message:error.message})
    }
}