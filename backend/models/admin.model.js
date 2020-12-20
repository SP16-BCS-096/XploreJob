const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
 email: {type: String, required: true},
 password :{ type: String, required: true ,minlength: 8},
 isDeleted: {type: Boolean, default: false},
 timestamp: {type: Date, default: Date.now}
});
adminSchema.methods.generateHash = function(password)
{
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

adminSchema.methods.validPassword = function(password)
{
	return bcrypt.compareSync(password, this.password);
};

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;