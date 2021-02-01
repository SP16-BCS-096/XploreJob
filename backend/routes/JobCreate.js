const router = require("express").Router();
var path = require('path');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const JobCreate = require("../models/JobCreate.model");
const UserSession = require("../models/usersession.model");


                
router.route('/').get((req, res) => {
  JobCreate.find()
    .then(JobCreate => res.json(JobCreate))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const JobTitle = req.body.JobTitle;
  const CompanyName = req.body.CompanyName;
  const JobDescription= req.body.JobDescription;
  const NoofPosts = req.body.NoofPosts;
  const Address = req.body.Address;
  const RequiredQualification = req.body.RequiredQualification;
  const RequiredExperience = req.body.RequiredExperience;
  const Phone =req.body.Phone;
  const recruiter = req.body.recruiter_id;
  const newJobCreate = new JobCreate({
    JobTitle,
    CompanyName,
    JobDescription,
    NoofPosts,
    Address,
    RequiredQualification,
    RequiredExperience,
    Phone,
    recruiter
  });

  newJobCreate.save()
  .then(() => res.json('Job added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  JobCreate.findById(req.params.id)
    .then(JobCreate => res.json(JobCreate))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  JobCreate.findByIdAndDelete(req.params.id)
    .then(() => res.json('JobCreate deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  JobCreate.findById(req.params.id)
    .then(JobCreate => {
      JobCreate.JobTitle = req.body.JobTitle;
      JobCreate.CompanyName = req.body.CompanyName;
      JobCreate.JobDescription = req.body.JobDescription;
      JobCreate.NoofPosts = req.body.NoofPosts;
      JobCreate.Address = req.body.Address;
      JobCreate.RequiredQualification = req.body.RequiredQualification;
      JobCreate.RequiredExperience = req.body.RequiredExperience;
      JobCreate.Phone = req.body.Phone;
    
      JobCreate.save()
        .then(() => res.json('JobCreate updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
})



module.exports = router;