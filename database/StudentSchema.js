import mongoose from './databaseConnect.js'


  const Students = new mongoose.Schema(
    {
        Name:{
            type:String,
            required:[true,"Name is required"]
        },
        keyCourse: {
            type:String,
            required:[true,"keyCourse is required"]
        },
        course:{
            type:String,
            required:[true,"Course is required"]
        },
        fees: {
            type:Number,
        },
        changeMentor:{
            type: Boolean, 
            default: false 
        }

    },
    {
        collection:'student',
        versionKey:false
    }
    )

    const studentSchema = mongoose.model('student',Students)

export default studentSchema