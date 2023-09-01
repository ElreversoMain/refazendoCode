import React from "react"

const AddEndereco=()=>{
    const[rua,setStateRua]=("")
    const[numero,setStateNumero]=("")
    const[vizinhaca,setStateVizinhaca]=("")
    const[cidade,setStateCidade]=("")
    const[complemento,setStateComplemento]=("")

    const escolherRua=(event)=>{
        setStateRua(event.target.value);
    }
    const escolherNumero=(event)=>{
        setStateNumero(event.target.value);
    }
    const escolherVizinhaca=(event)=>{
        setStateVizinhaca(event.target.value);
    }
    const escolherCidade=(event)=>{
        setStateCidade(event.target.value);
    }
    const escolherComplemento=(event)=>{
        setStateComplemento(event.target.value);
    }


    return <div>

    </div>
}

export default AddEndereco