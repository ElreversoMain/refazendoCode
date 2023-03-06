import {BaseDatabase} from "./BaseDatabase"
import { cadastro } from "../Types/cadastro"

export class UserDatabase extends BaseDatabase{

   private atletaTable="CadastroAtletas"

    public insertCadastro=async(
        cadastro:cadastro
        )=>{
            await UserDatabase.connection.insert({
                id:cadastro.id,
                competicao:cadastro.competicao,
                atleta:cadastro.atleta,
                value:cadastro.value,
                unidade:cadastro.unidade
        
        
            }).into(this.atletaTable)
        
        }
        public findAtleta=async(
            atleta:string
            
        )=>{
            
            const result=await UserDatabase.connection.select("atleta")
            .where({atleta})
            .from(this.atletaTable)
            
            return result
            
        }
        
       
}



