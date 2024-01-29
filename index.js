import express from "express"
import dotenv from 'dotenv'

dotenv.config()
let app=express();
let PORT=process.env.PORT
import RootRoute from "./Route/RootRoute.js"

app.use(express.json())
app.use("/",RootRoute)


app.listen(PORT,()=>console.log(`I started the app on port ${PORT} 😊`))


