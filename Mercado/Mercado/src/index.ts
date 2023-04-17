import app from "./app"
import {PutProduct} from "./Endpoint/productCreate"
import { information } from "./Endpoint/allProducts"

app.post("/PutProduct",PutProduct)
app.get("/information",information)


