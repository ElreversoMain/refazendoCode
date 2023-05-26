import { Request,Response } from "express";
import connection from "../BaseDatabase";

export const PegarComentario=async(req:Request,res:Response)=>{
    let ErrorCode=400
    try{
        const result =await connection ("CreateTwitter").select()

        res.status(200).send({result})

    }catch(error:any){
        res.status(ErrorCode).send({message:error.message})

    }
}