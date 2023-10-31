import express from "express";
import { register,login } from "../controllers/auth.js";
import { protect } from "../middlewares/auth.js";
const Authrouter = express.Router();
//AuthRoutes
Authrouter.post("/register",register)
Authrouter.post("/login",login)



export { Authrouter};