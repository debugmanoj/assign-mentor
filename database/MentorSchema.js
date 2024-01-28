import mongoose from './databaseConnect.js'


  const Mentor = new mongoose.Schema(
    {
        name:{
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
        students: {
            type:Array,
            default:[]
        },

    },
    {
        collection:'mentor',
        versionKey:false
    }
    )

    const MentorSchema = mongoose.model('mentor',Mentor)

export default MentorSchema