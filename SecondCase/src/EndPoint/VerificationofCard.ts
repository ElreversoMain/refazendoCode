import {Request,Response} from "express"
import connection from "../data/BaseDatabase"
import { Card } from "../Types/Card"

export const verificatorCard=async(req:Request,Res:Response)=>{
    let ErrorCode=400
    try{
        const holderName=req.body.holderName
        const number=req.body.number
        const expiration=req.body.expiration
        const cvv=req.body.cvv
        if(!holderName){
            throw new Error("Please put you name ")
        }
        if(!number){
            throw new Error("please put you correct number")
        }
        if(!expiration){
            throw new Error("put you date expiration")
        }
        if(!cvv){
            throw new Error("put you cvv behind you credit card")
        }
        
        
        
        const findCreditCard=await connection("CARD")
        .select()
        .where({number})

        if(findCreditCard.length>=1){
            throw new Error(" You Card Exist so you can use for payment ")
        }

        const createCredit=new Card(
            Date.now().toString(),
            holderName,
            number,
            expiration,
            cvv
        )
        await connection("CARD").insert({
            id:createCredit.getID(),
            holderName:createCredit.getHolderName(),
            number:createCredit.getNumber(),
            expiration:createCredit.getExpiration(),
            cvv:createCredit.getCvv()

        })

        Res.status(201).send({message:"you credit card was create with sucess",createCredit:createCredit})

    }catch(error:any){
        Res.status(ErrorCode).send({message:error.message})
    }

}