import {User} from "../models/Auth/user.js";
import {Admin} from "../models/Auth/Admin.js"
import jwt from "jsonwebtoken";

export const isAuthenticated =async (req,res,next)=>{
    const {token}=req.cookies;

    if(!token)
        return res.status(404).json({
            success:false,
            message:"Login first",
        });
    const decoded=jwt.verify(token,process.env.JWT_SECRET);
    req.user=await User.findById(decoded._id);
    next();
};

export const isAuthenticatedadmin =async (req,res,next)=>{
    const {token}=req.cookies;

    if(!token)
        return res.status(404).json({
            success:false,
            message:"Login first bro",
        });
    const decoded=jwt.verify(token,process.env.JWT_SECRET);
    req.user=await Admin.findById(decoded._id);
    next();
};
