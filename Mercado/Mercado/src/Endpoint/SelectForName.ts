import {Request,Response} from "express"
import connection from "../BaseDatabase"


export  const searchProductName=async(req:Request,res:Response)=>{
    let ErrorCode=400
    try{
        let title=req.query.title as string
        
       
      

        const result=await connection("Shopping")
        .select("*")
         .where("produto","like",`%${title}%`)
        
        res.status(201).send(result)
    }catch(error:any){
        res.status(ErrorCode).send({message:error.message})
    }
}
