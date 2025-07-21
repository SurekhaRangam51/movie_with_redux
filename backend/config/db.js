
import { configDotenv } from 'dotenv'
configDotenv({
    path:"./.env"
})
import mongoose from 'mongoose'
const db_connection=async(req,res)=>{
    try{
        await mongoose.connect(process.env.URL)
        console.log("Database successfully connected")
    }
    catch(err){
        console.log(`Database not connected ${err.message}`)
    }

}
export {db_connection}