// import mongoose from "mongoose";

// let connect=async()=>{
//     let dbName=process.env.dbName
//     let dbUrl=process.env.dbUrl
//     try {
//      mongoose.connect(`${dbUrl}/${dbName}`) 
//      console.log("Database Connected 🔌");  
//     } catch (error) {
//         console.log(error);
//     }
// }


// export default connect
import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'
console.log(`${process.env.dbUrl}/${process.env.dbName}`);
mongoose.connect(`${process.env.dbUrl}/${process.env.dbName}`);
export default mongoose