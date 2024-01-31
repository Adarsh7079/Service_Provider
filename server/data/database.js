import mongoose from "mongoose";

export const connectDB=()=>{
    mongoose.connect("mongodb://localhost:27017",{
        dbName:"Service_Provider"
    }).then(c=>console.log("connect data base "))
    .catch((e)=>console.log(e))
}