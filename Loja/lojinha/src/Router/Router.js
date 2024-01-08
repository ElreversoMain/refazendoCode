import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Homer from "../Pages/Homer/Homer";

const Router=()=>{ 
    return(
    <BrowserRouter>
    <Routes>
        <Route path={"/"}element={<Homer/>}/>
    </Routes>
    </BrowserRouter>
)
}
export default Router