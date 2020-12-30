const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const candidateSchema = new Schema({
 username: {type: String, required: true},
 email: {type: String, required: true},
 password :{ type: String, required: true ,minlength: 8},
 phone : {type:String, required: true},
 isDeleted: {type: Boolean, default: false},
 timestamp: {type: Date, default: Date.now}
});

candidateSchema.methods.generateHash = function(password)
{
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

candidateSchema.methods.validPassword = function(password)
{
	return bcrypt.compareSync(password, this.password);
};

const Candidate = mongoose.model('Candidate', candidateSchema);

module.exports = Candidate;