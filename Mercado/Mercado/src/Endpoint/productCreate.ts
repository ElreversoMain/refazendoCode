import {Request,Response} from "express"
import connection from "../BaseDatabase"
import {Buying} from "../Types/Comprar"


export const PutProduct=async(req:Request,res:Response)=>{
    let errorCode=400
    try{
        const produto=req.body.produto
        const descricao=req.body.descricao
        const quantidade=req.body.quantidade
        const preco=req.body.preco
        if(!produto){
            throw new Error("algo errado no requerimento")
        }
        const findProduct=await connection("Shopping")
        .select()
        .where({produto})

        if(findProduct.length>=1){
            throw new Error("Product already exist")
        }
        const creatProduct=new Buying(
            Date.now().toString(),
            produto,
            descricao,
            quantidade,
            preco
        )
        await connection("Shopping").insert({
            id:creatProduct.Getid(),
            produto:creatProduct.Getproduto(),
            descricao:creatProduct.Getdescricao(),
            quantidade:creatProduct.Getquantidade(),
            preco:creatProduct.Getpreco()
        })
        res.status(201).send({message:"add new product sucess",createProduct:creatProduct})
    }catch(error:any){
        res.status(errorCode).send({message:error.message})
    }
}