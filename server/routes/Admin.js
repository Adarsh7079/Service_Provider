import express from "express"
import {
    register,
    login,
    logout,getMyProfile
} from "../controllers/auth/admin.js";
import {isAuthenticatedadmin} from "../middlewares/auth.js";

const router=express.Router();

router.post("/new",register);
router.post("/login",login);
router.post("/logout",logout);
router.get("/me",isAuthenticatedadmin,getMyProfile);
export default router; 