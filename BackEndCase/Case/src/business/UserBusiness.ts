import { UserDatabase } from "../data/UserDatabase";

export class UserBusiness{
    public CreaterAtleta=async(input:any)=>{
  
        try{
            const {atleta,unidade,value,competicao}=input
            if(!atleta || !unidade ||!value || !competicao){
                throw new Error("Preencha os campos Atleta,Unidade,value,competicao")
        
            }
            
            
            const id:string=Date.now().toString()
    
            const userDatabase=new UserDatabase()
            
            const verificarAtleta=await userDatabase.findAtleta(atleta)
            if(verificarAtleta.length >= 3){
                throw new Error("Passou mais de 3 cadastro")
            }
            
            
            await userDatabase.insertCadastro({
                id,
                atleta,
                unidade,
                value,
                competicao
            })
    
        }catch(error:any){
            throw new Error(error.sqlMessage || error.message)
    
        }
    }    
    
    

}
