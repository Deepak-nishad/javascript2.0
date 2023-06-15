import {Router} from "express"
import authRoutes from "./auth_routes"
const router = Router()

router.use("/auth", authRoutes)

export default router

