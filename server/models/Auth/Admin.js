
import mongoose from 'mongoose';

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
    Aadhaar:{
      type:Number,
      unique:true
    },
    Image:{
      data: Buffer,
      contentType: String
    },
    Job_Type:{
      type:String,
    },
    Work_Experience:{
      type:Number
    },
    Age:{
      type:Number
    }
});

export const Admin=mongoose.model("SignupAdmin",schema);
