import { error } from "console";
import mongoose from "mongoose"
const MONGODB_URI:any = process.env.MONGODB_URI;

const dbConnect=()=>{
     mongoose.connect(MONGODB_URI).then((con)=>{
        console.log("connect successfully");
     }).catch((error)=>{
        console.log(error);
     })
}

export default dbConnect;
