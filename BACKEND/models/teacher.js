const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teacherSchema = new Schema({
    name : {
        type : String,
        required: true
    },
    age : {
        type : String,
        required: true
    },
    gender :{
        type : String,
        required: true
    },
    phoneNumber : {
        type : String,
        required: true
    },
    email :{
        type : String,
        required: true
    },
    description :{
        type : String,
        required: true
    }


})

const Teacher = mongoose.model("Teacher_Details",teacherSchema);
module.exports = Teacher;
