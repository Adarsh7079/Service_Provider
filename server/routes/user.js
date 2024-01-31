import express from "express"
import {
    register,
    login,
    logout
} from "../controllers/auth/user.js"
const router=express.Router();

router.post("/new",register);
router.post("/login",login);
router.post("/logout",logout);

export default router;