const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const recruiterSchema = new Schema({
 username: {type: String, required: true},
 email: {type: String, required: true},
 password :{ type: String, required: true ,minlength: 8},
 phone : {type:String, required: true},
 company : {type:String, required:true},
 isDeleted: {type: Boolean, default: false},
 timestamp: {type: Date, default: Date.now},
recruiter: {
   type: mongoose.Types.ObjectId,
   ref: 'Recruiter'
 }
});
recruiterSchema.methods.generateHash = function(password)
{
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

recruiterSchema.methods.validPassword = function(password)
{
	return bcrypt.compareSync(password, this.password);
};

const Recruiter = mongoose.model('Recruiter', recruiterSchema);

module.exports = Recruiter;