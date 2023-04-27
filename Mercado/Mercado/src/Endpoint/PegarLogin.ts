import {Request,Response} from "express"
import connection from "../BaseDatabase"


export const LoginCadastro=async(req:Request,res:Response)=>{
    let ErrorCode=400
    try{
        const result=await connection("CreateAccount")
        .select()

        res.status(200).send({result})
        
    }catch(error:any){
        res.status(ErrorCode).send({message:error.message})
    }
}