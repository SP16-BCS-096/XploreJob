const express = require('express');
const { PythonShell } = require('python-shell');
const multer = require('multer');
const Cv = require('../models/Cv');
const Router = express.Router();
const _ = require('lodash');
const router = require("express").Router();
var path = require('path');
// const pynode = require('@fridgerator/pynode');
const {spawn} = require('child_process');
const exec = require('child_process').exec;
// const pynode = require('@fridgerator/pynode');

const execa = require('execa');
const util = require('util');
const testFolder = './';
const fs = require('fs');

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, './uploads');
    },
    filename(req, file, cb) {
      cb(null, `${new Date().getTime()}_${file.originalname}`);
    }
  }),
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|jpg|png|pdf|doc|docx|xlsx|xls)$/)) {
      return cb(
        new Error(
          'only upload files with jpg, jpeg, png, pdf, doc, docx, xslx, xls format.'
        )
      );
    }
    cb(undefined, true); // continue with upload
  }
});
Router.post(('/Rank'),(req, res) =>
{

  
   const title = req.file;
// console.log(util.inspect(req.body));

 const subprocess = execa('python ./Rank.py', [title]);
  subprocess.stdout.pipe(process.stdout);
  
  (async () => {
    try{
    const {stdout} = await subprocess;
    // Returning Result: 
    res.send(stdout);
    console.log('child output:', stdout);
    } 
    catch (error) {
      res.status(400).send('Error while uploading file. Try again later.');
      console.log(error);
    }
})();


});

Router.post('/upload',upload.single('file'),
  async (req, res) => {
    try {
      const { title, description } = req.body;
      const { path, mimetype } = req.file;
      const file = new Cv({
        title,
        description,
        file_path: path,
        file_mimetype: mimetype
      });
      await file.save();
      res.send('file uploaded successfully.');
      console.log('file uploaded successfully');
    } 
    catch (error) {
      res.status(400).send('Error while uploading file. Try again later.');
      console.log(error);
    }
  },
  (error, req, res, next) => {
    if (error) {
      res.status(500).send(error.message);
    }
  }
);


Router.get('/getAllFiles', async (req, res) => {
  try {
    const files = await Cv.find({});
    const sortedByCreationDate = files.sort(
      (a, b) => b.createdAt - a.createdAt
    );
    res.send(sortedByCreationDate);
  } catch (error) {
    res.status(400).send('Error while getting list of files. Try again later.');
  }
});

Router.get('/download/:id', async (req, res) => {
  try {
    const file = await Cv.findById(req.params.id);
    res.set({
      'Content-Type': file.file_mimetype
    });
    res.sendFile(path.join(__dirname, '..', file.file_path));
  } catch (error) {
    res.status(400).send('Error while downloading file. Try again later.');
  }
});

module.exports = Router;