import { BrowserRouter,Routes,Route } from "react-router-dom";
import Homepage from "../Pages/HomePage";


const Navigator=()=>{
    return (
        <BrowserRouter>
<Routes>
    <Route path="/" element={<Homepage/>}/>
</Routes>

</BrowserRouter>

    )
}


export default Navigator;
