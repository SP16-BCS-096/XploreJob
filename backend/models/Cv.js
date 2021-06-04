const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
var multer  = require('multer');

const Schema = mongoose.Schema;

const CvSchema = new Schema({
 Cv: { 
  title: {
      type: String,
      required: false,
      trim: false
    },
    description: {
      type: String,
      required: false,
      trim: false
    },
    Cv_path: {
      type: String,
      required: false
    },
    Cv_mimetype: {
      type: String,
      required: false
    }
  }});
const Cv = mongoose.model('Cv', CvSchema);

module.exports = Cv;