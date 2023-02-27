import { Request,Response } from "express";
import connection from "../data/BaseDatabase";
import { Buyer } from "../Types/Buyer";

export const ManBuyer=async(req:Request,res:Response)=>{
    let errorCode=400
    try{
        const Name=req.body.Name
        const Email=req.body.Email
        const CPF=req.body.CPF
        if(!Name||!Email||!CPF){
            throw new Error("Something is wrong in Name,Email or CPF")
        }

        const findManBuyer=await connection("Buyer")
        .select()
        .where({CPF})

        if(findManBuyer.length >=1 ){
            throw new Error("Buyer already exist ")

        }
        const createBuyer= new Buyer(
            Date.now().toString(),
            Name,
            Email,
            CPF
        )
        await connection("Buyer").insert({
          id:createBuyer.getId(),
          Name:createBuyer.getName(),
          Email:createBuyer.getEmail(),
          CPF:createBuyer.getCPF()


        })
        res.status(201).send({message:"Buyer create with sucess",createBuyer:createBuyer})
    }catch(error:any){
        res.status(errorCode).send({message:error.message})

    }
}