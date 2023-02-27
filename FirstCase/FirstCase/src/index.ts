import app from "./controller/app"
import { getAtletas } from "./EndPoint/GetAll"
import { createAtleta } from "./EndPoint/CreateAtleta"
import {endOfCompetition} from "./EndPoint/endOfCompetition"




app.get("/getAtletas",getAtletas)
app.post("/createAtleta",createAtleta)
app.post("/endOfCompetition",endOfCompetition)
