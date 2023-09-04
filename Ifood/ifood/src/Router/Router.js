import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import  LoginPage  from "../Pages/LoginPage/LoginPage"
import Cadastrar from "../Pages/Cadastrar/Cadastrar"
import AddEndereco from "../Pages/AdicionarEndereço/AddEndereco"
import GetProfile from "../Pages/GetProfile/GetProfile"
import GetRestaurant from "../Pages/GetRestaurant/GetRestaurant"



const Router=()=>{
    return (
       
       <BrowserRouter>
       <Routes>
        <Route path={"/"}element={<LoginPage/>}/>
        <Route path={"Cadastrar"}element={<Cadastrar/>}/>
        <Route path={"/AddEndereco"} element={<AddEndereco/>}/>
        <Route path={"/GetProfile"} element={<GetProfile/>}/>
        <Route path={"/GetRestaurant"} element={<GetRestaurant/>}/>
       </Routes>
       </BrowserRouter>
    )
}
export default Router