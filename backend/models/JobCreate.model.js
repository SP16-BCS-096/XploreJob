const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;



const JobCreateSchema = new Schema({
 JobTitle: {type: String, required: true},
 CompanyName: {type: String, required: true},
 JobDescription :{ type: String, required: true },
 NoofPosts: {type: String , required :true},
Address: {type:String, required: true},
RequiredQualification: { type:String, required:true},
RequiredExperience: { type:String},
Phone: { type:String, required:true},
isDeleted: {type: Boolean, default: false},
timestamp: {type: Date, default: Date.now},
recruiter: {
   type: mongoose.Types.ObjectId,
   ref: 'Recruiter'
 }
});



const JobCreate = mongoose.model('JobCreate', JobCreateSchema);

module.exports = JobCreate;