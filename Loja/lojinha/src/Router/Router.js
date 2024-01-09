import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Homer from "../Pages/Homer/Homer";
import Cardapio from "../Pages/Cardápio/Cardápio";

const Router=()=>{ 
    return(
    <BrowserRouter>
    <Routes>
        <Route path={"/"}element={<Homer/>}/>
        <Route path={"/Cardapio"}element={<Cardapio/>}/>
    </Routes>
    </BrowserRouter>
)
}
export default Router