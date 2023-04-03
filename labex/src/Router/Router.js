import Admin from "../Àrea de Admin/Admin"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Homepage from "../HomePage/HomePage"
import AdminHomePage from "../AdminHomePage/AdminHomePage"
import AdminCreateTrip from "../AdminCreateTrip/AdminCreateTrip"
import ListTripsPage from "../ListTripsPage/ListTripsPage"
import  ApplicationFormPage from "../ApplicationFormPage/ApplicationFormPage"



const Navigator=()=>{
    return(
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="Admin" element={<Admin/>}/>
            <Route path="AdminHomePage" element={<AdminHomePage/>}/>
            <Route path="AdminCreateTrip" element={<AdminCreateTrip/>}/>
            <Route path="ListTripsPage" element={<ListTripsPage/>}/>
            <Route path="ApplicationFormPage" element={< ApplicationFormPage/>}/>
        </Routes>
        </BrowserRouter>
    </>
        
    )
}
export default Navigator