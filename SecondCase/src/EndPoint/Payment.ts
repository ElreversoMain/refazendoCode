import { Request,Response } from "express";
import connection from "../data/BaseDatabase";
import { Payment } from "../Types/Payment";

export const metodPayment=async(req:Request,res:Response)=>{
    let ErrorCode=400
    try{
        const Type=req.body.type
        const Card=req.body.card
        const Amount=req.body.Amount

        if(!Card){
            throw new Error("choose one method of payment")
        }
        if(!Type){
            throw new Error("Choose Card or boleto")
        }
        if(!Amount){
            throw new Error("what you want pay")
        }
        
        const createPayment=new Payment(
            Date.now().toString(),
            Amount,
            Card,
            Type
        )
        await connection("Payment").insert({
            id:createPayment.GetId(),
            Amount:createPayment.GetAmount(),
            Card:createPayment.GetCard(),
            Type:createPayment.GetType()
        })
        res.status(201).send({message:"Choice payment was sucess",createPayment:createPayment})


    }catch(Error:any){
        res.status(ErrorCode).send("Fail in API")

    }
}