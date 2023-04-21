import app from "./app"
import {PutProduct} from "./Endpoint/productCreate"
import { information } from "./Endpoint/allProducts"
import {searchProduct} from "./Endpoint/SelectforID"
import {searchProductName} from "./Endpoint/SelectForName"

app.post("/PutProduct",PutProduct)
app.get("/information",information)
app.get("/searchProduct",searchProduct)
app.get("/searchProductName",searchProductName)


