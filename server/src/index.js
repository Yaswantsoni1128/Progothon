import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import connectDB from "./config/db.js"; 
import {userRouter, spocRouter, PowerPlantRouter, paymentRouter} from "./routes/index.js"
import cookieParser from "cookie-parser"
import {completeProfileRouter} from "./routes/index.js"
dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:5173', // Allow frontend to connect
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
}));
app.use(express.json());
app.use(cookieParser());

connectDB();

app.get("/",(req,res)=>{
  res.send("SERVER RUNNING...")
})

app.use("/api/v1/auth",userRouter);
app.use("/api/v1/spoc", spocRouter);
// complete profile routes
app.use("/api/v1/users" , completeProfileRouter)
app.use("/api/v1/powerplant", PowerPlantRouter)
app.use("/api/payment", paymentRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
