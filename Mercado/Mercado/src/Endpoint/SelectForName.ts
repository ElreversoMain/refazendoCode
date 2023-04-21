import {Request,Response} from "express"
import connection from "../BaseDatabase"
import { Buying } from "../Types/Comprar"

export  const searchProductName=async(req:Request,res:Response)=>{
    let ErrorCode=400
    try{
        let title=req.query.title as string
        // let produto=req.query.produto as string
       
      

        const result=await connection("Shopping")
        .select("*")
         .where("produto","like",`%${title}%`)
        // .where("produto","like",`%${produto}}%`)
        
        res.status(201).send(result)
    }catch(error:any){
        res.status(ErrorCode).send({message:error.message})
    }
}
