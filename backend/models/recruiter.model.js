const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recruiterSchema = new Schema({
 username: {type: String, required: true},
 email: {type: String, required: true},
 password :{ type: String, required: true ,minlength: 8},
 phone : {type:String, required: true},
 company: {type: String, required: true}
}, {
  timestamps: true,
});

const Recruiter = mongoose.model('Recruiter', recruiterSchema);

module.exports = Recruiter;