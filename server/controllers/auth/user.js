import {User} from "../../models/Auth/user.js"
import bcrypt from "bcrypt"
import {sendCookie} from "../../utils/features.js"

// *********************** Register API **********************
export const register=async(req,res,next)=>{
    try{
        const {Full_Name,Mobile_Number, User_Type,Password}=req.body;
        //find user exist or not 
        let user=await User.findOne({Mobile_Number});
       
        //if user exist 
        if(user)
        {
            return res.status(404).json({
                success:false,
                message:"user exist",
            });
        }
        else
        {
            const hashedPassword =await bcrypt.hash(Password,10);
            user= await User.create({Full_Name, Mobile_Number, User_Type,  Password:hashedPassword});
            sendCookie(user ,res,"Register Successfully",201);
            return res.status(404).json({
                success:false,
                 user
            });
            return res.status(201).json({
                success:true,
                message:"user register",
            });
        }
    }
    catch(error){
        // res.status(401).json({
        //     message:"something wrong",
        //     success:false,
        //     user:req.user,
        // })
        // console.log(error)
    }
}

// ************ LOGIN API ****************
export const  login=async(req,res)=>{
    try{
        const {Mobile_Number,Password}=req.body;
        const user =await User.findOne({Mobile_Number}).select("+Password");
        if(!user)   return next(new ErrorHandler("Invalid Email & passwptd not found",400));


        const isMatch = await bcrypt.compare(Password,user.Password);
        if(!isMatch) return next(new ErrorHandler("Invalid Email & passwptd not found",400));
        sendCookie(user,res,`welcome back ${user.Full_Name}`);
    }
    catch(error){
        res.status(401).json({
            message:"wrong crediential",
            success:false,
            user:req.user,
        })
        console.log(error)
    }
}
// *******  Get LogOut API  ***** */

export const logout=(req,res)=>{
    res
    .status(200)
    .cookie("token","",{
        expires:new Date(Date.now()),
        sameSite:process.env.NODE_ENV==="Development" ?"lax":"none",
        secure:process.env.NODE_ENV==="Development" ?false:true,
    }).json({
        success:true,
        user:req.user,
    })
}