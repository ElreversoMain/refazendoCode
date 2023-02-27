import {Request,Response} from "express"
import connection from "../data/connection"
import { TABLE_NAME } from "../data/TableNames"
import {Cadastro} from "../type"

export const endOfCompetition=async(req:Request,res:Response)=>{
    let ErrorCode=400
    try{
        const atleta=req.body.atleta
        const competicao=req.body.competicao
        const unidade=req.body.unidade
        const value=req.body.value
        if(!atleta || !competicao || !unidade || !value)
        throw new Error("Erro na tentativa de cadastro")
           
      

        const findCompeticao=await connection(TABLE_NAME)
        .select()
        .where({competicao})
         
        
        if(findCompeticao.length >=0 && atleta ){
            throw new Error("Competicao encerrada")
        }


        const createAtleta=new Cadastro(
            Date.now().toString(),
            atleta,
            competicao,
            unidade,
            value
        )
        await connection(TABLE_NAME).insert({
            id:createAtleta.getId(),
            atleta:createAtleta.getAtleta(),
            competicao:createAtleta.getCompeticao(),
            unidade:createAtleta.getUnidade(),
            value:createAtleta.getValue()
        })
        res.status(201).send({message:"Cadastro Feito Com Sucesso",createAtleta:createAtleta})

    }catch(error:any){
        res.status(ErrorCode).send({message:error.message})

    }
}