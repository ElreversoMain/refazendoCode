import {Request,Response} from "express"
import { UserBusiness } from "../business/UserBusiness"


export class UserController{
     public CreaterAtleta=async(
        req:Request,
        res:Response
    )=>{
        try{ 
            const{atleta,unidade,value,competicao}=req.body
    
            const input={
                atleta,
                unidade,
                value,
                competicao
            }
    
            const userBusiness= new UserBusiness()
            await userBusiness.CreaterAtleta(input)
    
    
            res.status(201).send({message:"criado com sucesso"})
        }catch(error:any){
            res.status(400).send(error.message)
        }
    }
        
}
