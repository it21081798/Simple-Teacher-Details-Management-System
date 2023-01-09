const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salarySchema = new Schema({

    name : {
        type : String,
        required : true
    },
    role : {
        type : String,
        required : true
    },
    salary : {
        type : String,
        required : true
    },
    date : {
        type : String,
        required : true
    },


})

const Salary = new mongoose.model("Teacher_Salary",salarySchema);

module.exports = Salary;
