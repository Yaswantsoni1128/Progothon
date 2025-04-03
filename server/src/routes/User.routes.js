import express from "express";
import {getUserInfo, login, sendOtp, signUp}  from "../controllers/index.js"; 
import { auth } from "../middlewares/Auth.middlewares.js";

const userRouter = express.Router();

userRouter.post("/sendotp", sendOtp);
userRouter.post("/signup", signUp)
userRouter.post('/login', login)
userRouter.get('/getUserInfo',auth,getUserInfo)

export default userRouter;
