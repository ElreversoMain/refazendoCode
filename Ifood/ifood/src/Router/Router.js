import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import  LoginPage  from "../Pages/LoginPage/LoginPage"
import Cadastrar from "../Pages/Cadastrar/Cadastrar"
import AddEndereco from "../Pages/AdicionarEndereço/AddEndereco"
import GetProfile from "../Pages/GetProfile/GetProfile"
import GetRestaurant from "../Pages/GetRestaurant/GetRestaurant"
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile"
import GetDetailRestaurant from "../Pages/GetDetailRestaurant/GetDetailRestaurant"
import Cart from "../Pages/Cart/Cart"




const Router=()=>{
    return (
       
       <BrowserRouter>
       <Routes>
        <Route path={"/"}element={<LoginPage/>}/>
        <Route path={"Cadastrar"}element={<Cadastrar/>}/>
        <Route path={"/AddEndereco"} element={<AddEndereco/>}/>
        <Route path={"/GetProfile"} element={<GetProfile/>}/>
        <Route path={"/GetRestaurant"} element={<GetRestaurant/>}/>
        <Route path={"/UpdateProfile"} element={<UpdateProfile/>}/>
        <Route path={`/GetDetailRestaurant/:id`} element={<GetDetailRestaurant/>}/>
        <Route path={`/Cart`} element={<Cart/>}/>
       </Routes>
       </BrowserRouter>
    )
}
export default Router