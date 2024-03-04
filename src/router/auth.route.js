import { Router } from "express";
import { login, logout, sendMessage } from "../controller/auth.controller.js";
const router = Router();

router.post("/login", login);
router.post("/logout", logout);
router.post("/sendMessage", sendMessage);
export default router;