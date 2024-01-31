
import mongoose from 'mongoose';

const schema =new mongoose.Schema({
   Full_Name:{
    type:String,
    required:true
   },
   Mobile_Number:{
     type:String,
     unique:true
   },
   User_Type:{
     type:String,
     require:true
   },
    Password:{
        type:String,
        required:true
    }
});

export const User=mongoose.model("SignupUser",schema);
