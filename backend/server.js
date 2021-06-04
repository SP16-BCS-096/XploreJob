const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
var fs = require('fs');
var bodyParser = require('body-parser');
const path = require('path');
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const methodOverride = require("method-override");


require('dotenv/config');
var Schema = mongoose.Schema;


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(methodOverride('_method'));
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const candidatesRouter = require('./routes/candidates');
const recruitersRouter = require('./routes/recruiters')
const adminRouter = require('./routes/admin');
const JobCreateRouter = require('./routes/JobCreate');
const CvRouter =require('./routes/Cv');

 app.use(function(req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
 });

app.use('/candidates', candidatesRouter);
app.use('/recruiters', recruitersRouter);
app.use('/admin' , adminRouter);
app.use('/JobCreate', JobCreateRouter);
app.use('/Cv' , CvRouter);





app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});