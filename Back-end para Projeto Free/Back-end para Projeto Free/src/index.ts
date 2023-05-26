import app from "./app"
import {CreateTittle} from "../src/EndPoint/CriarComentario"
import {PegarComentario} from "../src/EndPoint/PegarComentario"
import {Delete} from "../src/EndPoint/Deletar"


app.post("/CreateTittle",CreateTittle)
app.get("/PegarComentario",PegarComentario)
app.delete("/DeleteProductId",Delete)
