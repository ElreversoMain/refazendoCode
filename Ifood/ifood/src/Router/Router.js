import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import  LoginPage  from "../Pages/LoginPage/LoginPage"
import Cadastrar from "../Pages/Cadastrar/Cadastrar"
import AddEndereco from "../Pages/AdicionarEndereço/AddEndereco"



const Router=()=>{
    return (
       
       <BrowserRouter>
       <Routes>
        <Route path={"/"}element={<LoginPage/>}/>
        <Route path={"Cadastrar"}element={<Cadastrar/>}/>
        <Route path={"/AddEndereco"} element={<AddEndereco/>}/>
       </Routes>
       </BrowserRouter>
    )
}
export default Router