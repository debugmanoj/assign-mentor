import express from "express"
let app=express();
import RootRoute from "./Route/RootRoute.js"
let PORT=process.env.port||8000

app.use(express.json())
app.use("/",RootRoute)

app.listen(PORT,()=>console.log(`I started the app on port ${PORT} 😊`))