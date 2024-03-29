import {User} from "../../models/Auth/user.js"
import bcrypt from "bcrypt"
import {sendCookie} from "../../utils/features.js"
import ErrorHandler from "../../middlewares/error.js"

// *********************** Register API **********************
export const register=async(req,res,next)=>{
    try{
        const {Full_Name,Mobile_Number, User_Type,Password}=req.body;
        //find user exist or not 
        let user=await User.findOne({Mobile_Number});
       
        //if user exist 
        if(user)
        {
            return next(new ErrorHandler("user already register",401));

        }
        else
        {
            // const hashedPassword =await bcrypt.hash(Password,10);
            // user= await User.create({Full_Name, Mobile_Number, User_Type,  Password:hashedPassword});
            // sendCookie(user ,res,"Register Successfully",201);
            // return res.status(201).json({
            //     success:true,
            //     message:"user register",
            // });

            const resp=new User({Full_Name, Mobile_Number, User_Type,Password});
            await resp.save();
            res.status(201).json({
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
        next(error)
    }
}

// ************ LOGIN API ****************
export const  login=async(req,res,next)=>{
    let token
    try{
        const {Mobile_Number,Password}=req.body;
        if(!Mobile_Number || !Password)
        {
            return res.status(400).json({error:"Please fill the data "})
        }
        const user =await User.findOne({Mobile_Number});
        
        if(!user)  {
            return res.status(400).json({error:"bad request "})

        }
        else
        {
            const isMatch = await bcrypt.compare(Password,user.Password);

            token=await user.generateAuthToken();
            // console.log(token)
            res.cookie("jwtoken",token,{
                expires:new Date(Date.now()+25892000000),
                httpOnly:true
            });
            if(!isMatch) {
                return next(new ErrorHandler("Invalid Credientauil",401));
    
            }
            else
            {
                res.json({message:"user logimn successfully "})
            }
          
          // sendCookie(user,res,`welcome back ${user.Full_Name}`) ;
        }
       
    }
    catch(error){
       return res.status(401).json({
            message:"wrong crediential",
            success:false,
            user:req.user,
        })
      //  console.log(error)
       // next(error)
    }
};
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
};
// **************** get user API  ****************

export  const getMyProfile=(req,res)=>{
    res.status(200).json({
        success:true,
        user:req.user,
    })
};