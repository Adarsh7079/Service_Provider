
import mongoose from 'mongoose';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const schema =new mongoose.Schema({
  Full_Name:{
    type:String,
    required:true
   },
   Mobile_Number:{
     type:Number,
     unique:true
   },
   User_Type:{
     type:String,
     require:true
   },
    Password:{
        type:String,
        required:true
      
    },
    tokens:[{
      token:{
          type:String,
          required:true
      }
  }]
});
schema.pre('save',async function(next){
  console.log("from sere")
  if(this.isModified('Password')){
    this.Password=await bcrypt.hash(this.Password,12);
  }
  next();
});

//generate token 
schema.methods.generateAuthToken = async function(){
  console.log("runhere")
    try{
        let token=jwt.sign({_id:this._id},process.env.JWT_SECRET)//it take tow key payload and unique key \
        this.tokens=this.tokens.concat({token:token});
        await  this.save();
        return token;
    }
    catch(err)
    {
        console.log(err);
    }
  }

export const User=mongoose.model("SignupUser",schema);
