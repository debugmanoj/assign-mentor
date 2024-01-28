import dotenv from 'dotenv'
dotenv.config()
import MentorModel from "../database/MentorSchema.js";
import studentSchema from '../database/StudentSchema.js';
import mentorChange from  "../database/mentorChange.js"

// let mentor = [
//   {
//     id: 1,
//     name: "Nagarajan",
//     age: 20,
//     student: [],
//     keyCourse: "Guvi",
//     course: "MERN Full Stack",
//   },
//   {
//     id: 2,
//     name: "Rupan Chakaravarthy",
//     age: 20,
//     student: [],
//     keyCourse: "data",
//     course: "Data Science",
//   },
//   {
//     id: 3,
//     name: "Anand Rajamuthu",
//     age: 40,
//     student: [],
//     keyCourse: "project",
//     course: "Project",
//   },
// ];

// let mentorChange = [
//   {
//     id: 4,
//     name: "Manoj Kumar",
//     age: 40,
//     student: 0,
//     keyCourse: "changeMentor",
//     course: "Allinone",
//     busyStatus: true,
//   },
//   {
//     id: 4,
//     name: "Manoj Kumar",
//     age: 40,
//     student: 0,
//     keyCourse: "changeMentor",
//     course: "Allinone",
//     busyStatus: false,
//   },
// ];

let student = [
  {
    id: "1",
    Name: "Manoj",
    keyCourse: "Guvi",
    course: "MERN Full stack",
    fees: "2000",
    changeMentor: false,
  },
  {
    id: "2",
    Name: "Kumar",
    keyCourse: "data",
    course: "Data Science ",
    fees: "4000",
    changeMentor: true,
  },
  {
    id: "3",
    Name: "Ganesha",
    keyCourse: "Guvi",
    course: "MERN Full stack",
    fees: "8000",
    changeMentor: false,
  },
  {
    id: "4",
    Name: "Rajeswari",
    keyCourse: "data",
    course: "Data Science ",
    fees: "2000",
    changeMentor: true,
  },
  {
    id: "5",
    Name: "Nicky",
    keyCourse: "data",
    course: "Data Science ",
    fees: "2000",
    changeMentor: false,
  },
  {
    id: "6",
    Name: "Mathan",
    keyCourse: "guvi",
    course: "MERN Full stack",
    fees: "2000",
    changeMentor: true,
  },
  {
    id: "7",
    Name: "santhosh",
    keyCourse: "guvi",
    course: "MERN Full stack",
    fees: "2000",
    changeMentor: false,
  },
];

let updatedMentor = [];

let changeMentorStudent = [];

let particularMentors = [];

const particularMentor = (req, res) => {


  const id = req.params.id;
  mentor.map((val) => {
    if (val.id == id) {
      let result = {
        mentorName: val.name,
        student: val.student,
      };
      particularMentors.push(result);
    }
  });
  try {
    res.status(200).send({
      message: "I am fetched mentor student",
      particularMentors,
    });
  } catch (error) {}
};

async function findChangeMentor() {

  let result = [];
  const mentorChangeList=await mentorChange.find()
  for (let i = 0; i < mentorChangeList.length; i++) {
    if (mentorChangeList[i].busyStatus) {
      result.push(mentorChangeList[i].name);
      return result;
    }
  }
  return result;
}

const changeMentor =async (req, res) => {
  const name= req.params.name;

  const student = await studentSchema.findOne({Name:name});
  if(student!=null){
    let mentorResult =await findChangeMentor();
    if (mentorResult != null){
      let result = {
                mentor: mentorResult,
                studentName: student.Name,
                   };

    const value=result
    }

  }
  else{
    console.log("Hello enter the name correctly");
  }
  // console.log(studentList);
  // student.map((val) => {
  //   if (val.id == id) {
  //     let mentorResult = findChangeMentor();
  //     console.log(mentorResult);
  //     if (mentorResult != null) {
  //       let result = {
  //         mentor: mentorResult,
  //         studentName: val.Name,
  //       };
  //       changeMentorStudent.push(result);
  //     }
  //   }
  // });
  try {
    res.status(200).send({
      message: "I am details of the mentor",
      value,
    });
  } catch (error) {}
};

async function  findStudent(keyCourse) {
  const studentList = await studentSchema.find()
  let result=[]
  for (let i = 0; i < studentList.length; i++) {
    console.log(keyCourse);
    if ( keyCourse == studentList[i].keyCourse) {
      console.log(studentList[i]);
      // console.log(student[i].Name);
      // student[i].student.push(studentName)
      result.push(student[i].Name)
  
      
    }
  }
  return result;
}

const mentorAndStudent = async(req, res) => {
  const mentorList = await MentorModel.find()
  const updatedMentor = await Promise.all(mentorList.map(async (val) => {
    if (val.keyCourse == "Guvi" || val.keyCourse == "data") {
      const studentName = await findStudent(val.keyCourse);
      val.students.push(studentName);
      // console.log(studentName);
      await val.save();
      return{
        name: val.name,
        course: val.course,
        students: studentName,
      }
      
      // Return the mentor object with studentName
      // return { name: val.name, course: val.course, student: studentName };
    }
  }));



  // mentorList.map((val) => {
  //   if (val.keyCourse === "Guvi" || val.keyCourse === "data") {
  //     let studentName = await findStudent(val.keyCourse);
  //     console.log(studentName);

  //     // let result = {
  //     //   name: val.name,
  //     //   course: val.course,
  //     //   students: val.student.push(studentName),
  //     // };
  //     // updatedMentor.push(result);
  //   }
  // });
  try {
    res.status(200).send({
      message: "I am details of the mentor",
      updatedMentor,
    });
  } catch (error) {}
};

const mentordetail = async(req, res) => {
  const mentorList = await MentorModel.find()
  console.log(mentorList);
  try {
    res.status(200).send({
      message: "Mentor List",
      mentorList

    });
  } catch (error) {}
};

const mentorcreate =async (req, res) => {
  const mentorList = await MentorModel.create(req.body)
  // let id = mentor.length ? mentor[mentor.length - 1].id + 1 : 1;
  // req.body.id = id;
  // mentor.push(req.body);
  try {
    res.status(200).send({
      message: "I am details of the mentor",
      mentorList,
    });
  } catch (error) {}
};



const studentcreate = async(req, res) => {
  const studentCreate = await studentSchema.create(req.body)
  try {

    res.status(200).send({
      message: "Student List",
      studentCreate,
    });
  } catch (error) {}
};

const studentdetail = async(req, res) => {

  const studentList = await studentSchema.find()

  try {
    res.status(200).send({
      message: "I am details of the mentor",
      studentList,
    });
  } catch (error) {}
};

export default {
  mentordetail,
  mentorcreate,
  studentdetail,
  studentcreate,
  mentorAndStudent,
  changeMentor,
  particularMentor,
 
};
