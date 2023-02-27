import app from "./controller/app"
import {createCreditCard} from "./EndPoint/CardCreate"
import {metodPayment} from "./EndPoint/Payment"
import {information} from "./EndPoint/information"
import { verificatorCard } from "./EndPoint/VerificationofCard"
import { ManBuyer } from "./EndPoint/Buyer"


app.post("/createCreditCard",createCreditCard)
app.post("/metodPayment",metodPayment)
app.get("/GetInformation",information)
app.post("/VerificatorCard",verificatorCard)
app.post("/ManBuyer",ManBuyer)



