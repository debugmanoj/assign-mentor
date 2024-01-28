import express from "express";
let router = express.Router();
import mentor from "../controller/mentor.js";

router.get("/", mentor.mentordetail);
router.post("/mentorAdd", mentor.mentorcreate);
router.get("/student", mentor.studentdetail);
router.post("/studentAdd", mentor.studentcreate);
router.get("/mentorAndStudent", mentor.mentorAndStudent);
router.get("/ChangeMentor/:name", mentor.changeMentor);
router.get("/particularMentor/:id", mentor.particularMentor);

export default router;
