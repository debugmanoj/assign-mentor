import express from "express"
import HomePage from "../controller/HomePage.js"
import mentorStudentRoute from "./mentorStudentRoute.js"

let router=express.Router()
router.get("/",HomePage.rootRender)


//Other routes for mentor and student
router.use("/mentorStudent",mentorStudentRoute)
// router.use("/",studentRoute)

export default router