import express from "express"
import { completeProfile, getUserProfile  } from "../controllers/index.js"

const router = express.Router()

router.post("/completeProfile/:userId"  , completeProfile)
router.get("/getUserProfile/:userId"  , getUserProfile)

export default router