import express from "express"
import { UserController } from "../controller/UserController"

export const UserRouter=express.Router()

const userController=new UserController()
const userGetall=new UserController()

UserRouter.post("/create",userController.CreaterAtleta)
