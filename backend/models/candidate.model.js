const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const candidateSchema = new Schema({
 username: {type: String, required: true},
 email: {type: String, required: true},
 password :{ type: String, required: true ,minlength: 8},
 phone : {type:String, required: true}
}, {
  timestamps: true,
});

const Candidate = mongoose.model('Candidate', candidateSchema);

module.exports = Candidate;