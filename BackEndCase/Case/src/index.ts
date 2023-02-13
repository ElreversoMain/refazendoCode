import app from "./controller/app"
import { UserRouter } from "./Router/UserRouter"
import express,{Request,Response} from "express"
import { BaseDatabase } from "./data/BaseDatabase"



app.use("/create",UserRouter)



