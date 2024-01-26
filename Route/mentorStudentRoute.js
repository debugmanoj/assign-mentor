import express from "express";
let router = express.Router();
import mentor from "../controller/mentor.js";

router.get("/", mentor.mentordetail);
router.post("/mentorAdd", mentor.mentorcreate);
router.get("/student", mentor.studentdetail);
router.get("/studentAdd", mentor.mentorAndStudent);
router.get("/mentorAndStudent", mentor.mentorAndStudent);
router.get("/ChangeMentor/:id", mentor.changeMentor);
router.get("/particularMentor/:id", mentor.particularMentor);

export default router;
