import app from "./app"
import {PutProduct} from "./Endpoint/productCreate"
import { information } from "./Endpoint/allProducts"
import {searchProduct} from "./Endpoint/SelectforID"

app.post("/PutProduct",PutProduct)
app.get("/information",information)
app.get("/searchProduct",searchProduct)


