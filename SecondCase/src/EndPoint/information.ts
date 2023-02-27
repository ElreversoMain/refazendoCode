import {Request,Response} from "express"
import connection from "../data/BaseDatabase"
import { Payment } from "../Types/Payment";

export const information=async(req:Request,res:Response)=>{
    let ErrorCode=400
    try{


        const result=await connection("Payment").select()
        

        res.status(200).send({result})
        
        
    }catch(error:any){
        res.status(ErrorCode).send({message:error.message})

    }
}