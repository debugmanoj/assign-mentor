import mongoose from './databaseConnect.js'


  const Students = new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"Name is required"]
        },
        keyCourse: {
            type:String,
            required:[true,"keyCourse is required"]
        },
        student:{
            type:Number,
            default:0
        },
        course: {
            type:Number,
        },
        busyStatus:{
            type:Boolean,
            default:false
        }

    },
    {
        collection:'mentorSchema',
        versionKey:false
    }
    )

    const studentSchema = mongoose.model('Students',Students)

export default studentSchema