import {Request,Response} from "express"
import connection from "../data/connection"
import { TABLE_NAME } from "../data/TableNames"


export const getAtletas=async(req:Request,res:Response)=>{
    let ErrorCode=400
    try{
        const result=await connection(TABLE_NAME).select()

        res.status(200).send({AtletasTDO:result})

    }catch(error:any){
        res.status(ErrorCode).send({message:error.message})

    }
}