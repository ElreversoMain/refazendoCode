import {Request,Response} from "express"
import connection from "../BaseDatabase"
import { Comprador } from "../Types/Comprador"


export const CreateAccount=async(req:Request,res:Response)=>{
    let ErrorCode=400
    try{
        const name=req.body.name
        const email=req.body.email
        const senha=req.body.senha

        if(!name||!email||!senha){
            throw new Error("something fail in Cadastre")
        }
        const findAccount=await connection("CreateAccount")
        .select()
        .where({email})

        if(findAccount.length >=1){
            throw new Error(" you account already exist ")
        }
        const CreatAccount=new Comprador(
            Date.now().toString(),
            name,
            email,
            senha
        )
        await connection("CreateAccount").insert({
            id:CreatAccount.Getid(),
            name:CreatAccount.GetName(),
            email:CreatAccount.GetEmail()
        })
        res.status(201).send({message:"You account was create congratulations",CreatAccount:CreatAccount})

    }catch(error:any){
        res.status(ErrorCode).send({message:error.message})
    }

}
