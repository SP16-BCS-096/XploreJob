const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const JobCreateSchema = new Schema({
 JobTitle: {type: String, required: true},
 CompanyName: {type: String, required: true},
 JobDescription :{ type: String, required: true },
Address: {type:String, required: true},
RequiredQualification: { type:String, required:true},
RequiredExperience: { type:String, required:true},
CompanyWeb: {type: String, required: true},
Phone: { type:String, required:true}

}, {
  timestamps: true,
});

const JobCreate = mongoose.model('JobCreate', JobCreateSchema);

module.exports = JobCreate;