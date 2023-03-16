import Admin from "../Àrea de Admin/Admin"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Homepage from "../HomePage/HomePage"
import ListaViagem from "../ListaViagem/ListaViagem"
import Inscreva from "../Inscrever-se/Inscreva"



const Navigator=()=>{
    return(
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="Admin" element={<Admin/>}/>
            <Route path="ListaViagem" element={<ListaViagem/>}/>
            <Route path="Inscreva" element={<Inscreva/>}/>

        </Routes>
        </BrowserRouter>
    </>
        
    )
}
export default Navigator