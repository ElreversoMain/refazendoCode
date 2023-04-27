import {Request,Response} from "express"
import connection from "../BaseDatabase"
import {Buying} from "../Types/Comprar"

export const DeleteProductId=async(req:Request,res:Response)=>{
    let ErrorCode=400
    try{
        let id=req.query.id as string

        const deletar= await connection("Shopping")
        .where("id","like",`%${id}%`)
        .delete()

        res.status(201).send({message:"produto deletado",deletar})


    }catch(error:any){
        res.status(ErrorCode).send({message:error.message})

    }
}
