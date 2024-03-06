import { Router } from "express";
import { login, logout, sendMessage, profile } from "../controller/auth.controller.js";
import {authRequired} from "../middlewares/validateToken.js"
const router = Router();

router.post("/login", login);
router.post("/logout", logout);
router.post("/sendMessage", sendMessage);
router.get("/profile", authRequired, profile );
export default router;