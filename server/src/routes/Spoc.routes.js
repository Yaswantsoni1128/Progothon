import express from "express"

import { addFarmer, updateFarmer ,getAllFarmers , deleteFarmer, getAllRequests, acceptRequest,declineRequest, getSpocInfo } from "../controllers/index.js";

import {auth, isSpoc} from  "../middlewares/index.js"
const spocRouter= express.Router();

spocRouter.post("/addFarmer",auth, isSpoc, addFarmer)
spocRouter.get("/getAllFarmers",auth, isSpoc, getAllFarmers)
spocRouter.delete("/deleteFarmer/:farmerId",auth, isSpoc, deleteFarmer)
spocRouter.put("/updateFarmer/:farmerId",auth, isSpoc, updateFarmer)
spocRouter.get("/getAllRequests",auth,isSpoc, getAllRequests)
spocRouter.post("/acceptRequest/:reqid",auth,isSpoc, acceptRequest);
spocRouter.post("/declineRequest/:reqid",auth,isSpoc, declineRequest);
spocRouter.get("/getSpocInfo",auth,getSpocInfo)

// spocRouter.post("/uploadSpoc", uploadSpoc)
export default spocRouter