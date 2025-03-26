import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
            name: String,
            age: Number,
            city : String
        }); 
const Student = mongoose.model("student",studentSchema)

export default Student;//file export
//default use when we here doing that one only
//export use in here we doing multiple export
