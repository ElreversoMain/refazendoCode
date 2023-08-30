import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import  LoginPage  from "../Pages/LoginPage"

const Router=()=>{
    return (
       <BrowserRouter>
       <Routes>
        <Route path={"/"}element={<LoginPage/>}/>
       </Routes>
       </BrowserRouter>
    )
}
export default Router