import {Request,Response} from "express"
import connection from "../BaseDatabase"


export  const searchProduct=async(req:Request,res:Response)=>{
    let ErrorCode=400
    try{
        let id=req.query.id as string
       
      

        const result=await connection("Shopping")
        .select("*")
         .where("id","like",`%${id}%`)
        
        res.status(201).send(result)
    }catch(error:any){
        res.status(ErrorCode).send({message:error.message})
    }
}
