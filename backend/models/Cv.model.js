const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
var multer  = require('multer')
const Schema = mongoose.Schema;

const CvSchema = new Schema({
 Image: {type: String},	
 FirstName: {type: String, required: true},
 LastName: {type: String},
 Email :{ type: String, required: true},
 ContactNo : {type:String, required: true},
 PresentAddress :{ type: String, required: true },
 PermanentAddress : {type:String, required: true},
 DegreeTitle : {type:String, required: true},
 CGPA :{ type: String, required: true },
 Year : {type:String, required: true},
 EducationStatus : {type:String, required: true},
 JobPost :{ type: String },
 Company : {type:String},
 Address:{type:String},
 PostStatus : {type:String},
 isDeleted: {type: Boolean, default: false},
 timestamp: {type: Date, default: Date.now}
});

const Cv = mongoose.model('Cv', CvSchema);

module.exports = Cv;