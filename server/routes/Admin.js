import express from "express"
import {
    register,
    login,
    logout
} from "../controllers/auth/admin.js"
const router=express.Router();

router.post("/new",register);
router.post("/login",login);
router.post("/logout",logout);

export default router; 