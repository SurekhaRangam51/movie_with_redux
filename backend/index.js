import express from 'express'
import cors from 'cors'
import {configDotenv} from 'dotenv'
import {db_connection}  from './config/db.js'
import  movieRoutes from "./routes/movieRoutes.js"
configDotenv({
    path:"./.env"
})
db_connection()
const app=express()
const PORT=process.env.PORT
app.use(cors())
app.use(express.json())
app.use("/api/movies",movieRoutes)
app.use((req,res,next)=>{
    res.json({"err":1,"msg":"No route found"})
})
app.listen(PORT,(err)=>{
    if (err) throw err
    console.log(`Server is running  ${PORT}`)
})