let mentor = [
  {
    id: 1,
    name: "Nagarajan",
    age: 20,
    student: [],
    keyCourse: "Guvi",
    course: "MERN Full Stack",
  },
  {
    id: 2,
    name: "Rupan Chakaravarthy",
    age: 20,
    student: [],
    keyCourse: "data",
    course: "Data Science",
  },
  {
    id: 3,
    name: "Anand Rajamuthu",
    age: 40,
    student: [],
    keyCourse: "project",
    course: "Project",
  },
];

let mentorChange = [
  {
    id: 4,
    name: "Manoj Kumar",
    age: 40,
    student: 0,
    keyCourse: "changeMentor",
    course: "Allinone",
    busyStatus: true,
  },
  {
    id: 4,
    name: "Manoj Kumar",
    age: 40,
    student: 0,
    keyCourse: "changeMentor",
    course: "Allinone",
    busyStatus: false,
  },
];

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

function findChangeMentor() {
  let result = [];
  for (let i = 0; i < mentorChange.length; i++) {
    if (mentorChange[i].busyStatus) {
      result.push(mentorChange[i].name);
      return result;
    }
  }
  return result;
}

const changeMentor = (req, res) => {
  const id = req.params.id;
  student.map((val) => {
    if (val.id == id) {
      let mentorResult = findChangeMentor();
      console.log(mentorResult);
      if (mentorResult != null) {
        let result = {
          mentor: mentorResult,
          studentName: val.Name,
        };
        changeMentorStudent.push(result);
      }
    }
  });
  try {
    res.status(200).send({
      message: "I am details of the mentor",
      changeMentorStudent,
    });
  } catch (error) {}
};

function findStudent(keyCourse) {
  // let result=[]
  for (let i = 0; i < student.length; i++) {
    if (student[i].keyCourse === keyCourse) {
      // student[i].student.push(studentName)
      return student[i].Name;
      // result.push(student[i].Name)
      // return result
    }
  }
  return result;
}

const mentorAndStudent = (req, res) => {
  mentor.map((val) => {
    if (val.keyCourse === "Guvi" || val.keyCourse === "data") {
      let studentName = findStudent(val.keyCourse);
      let result = {
        name: val.name,
        course: val.course,
        students: val.student.push(studentName),
      };
      updatedMentor.push(result);
    }
  });
  try {
    res.status(200).send({
      message: "I am details of the mentor",
      updatedMentor,
    });
  } catch (error) {}
};

const mentordetail = (req, res) => {
  try {
    res.status(200).send({
      message: "I am details of the mentor",
      mentor:mentor,
      student:student
    });
  } catch (error) {}
};

const mentorcreate = (req, res) => {
  let id = mentor.length ? mentor[mentor.length - 1].id + 1 : 1;
  req.body.id = id;
  mentor.push(req.body);
  try {
    res.status(200).send({
      message: "I am details of the mentor",
      mentor,
    });
  } catch (error) {}
};

const studentcreate = (req, res) => {
  let id = student.length ? student[mentor.length - 1].id + 1 : 1;
  req.body.id = id;
  student.push(req.body);
  try {
    res.status(200).send({
      message: "I am details of the mentor",
      mentor,
    });
  } catch (error) {}
};

const studentdetail = (req, res) => {
  try {
    res.status(200).send({
      message: "I am details of the mentor",
      student,
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
