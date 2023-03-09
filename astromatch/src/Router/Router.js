import YouChoice from "../Pages/GetAllYouChoice"
import { BrowserRouter, Routes,Route } from "react-router-dom"
import ShowPerfill from "../Pages/GetAllPerfil"

const Navigator=()=>{
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/"element={<ShowPerfill/>}/>
            <Route path="/YouChoice" element={<YouChoice/>}/>
        </Routes>
        </BrowserRouter>
        </>
        
        
    )
}
export default Navigator