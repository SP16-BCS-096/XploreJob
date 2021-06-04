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
  const Category = req.body.Category;
  const Address = req.body.Address;
  const WorkType = req.body.WorkType;
  const Salary = req.body.Salary;
  const Phone =req.body.Phone;
  const StartDate = req.body.StartDate;
  const EndDate = req.body.EndDate;
  const recruiter = req.body.recruiter_id;
  const newJobCreate = new JobCreate({
    JobTitle,
    CompanyName,
    JobDescription,
    Category,
    Address,
    WorkType,
    Salary,
    Phone,
    StartDate,
    EndDate,
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
 let JobId = req.params.id

    JobCreate.findByIdAndRemove(JobId).select('-__v -_id')
        .then(JobCreate => {
            if(!JobCreate) {
              res.status(400).json({
                message: "Does Not exist a Job with id = " + JobId,
                error: "404",
              });
            }
            res.status(200).json({});
        }).catch(err => {
            return res.status(500).send({
              message: "Error -> Can NOT delete a Job with id = " + JobId,
              error: err.message
            });
        });
});

router.route('/update/:id').post((req, res) => {
JobCreate.findByIdAndUpdate(
                      req.body._id, 
                      {
               JobTitle : req.body.JobTitle,
   CompanyName : req.body.CompanyName,
   JobDescription : req.body.JobDescription,
   Category : req.body.Category,
   Address : req.body.Address,
   WorkType : req.body.WorkType,
   Salary : req.body.Salary,
   Phone : req.body.Phone,
   StartDate : req.body.StartDate,
   EndDate : req.body.EndDate,

                      }, 
                        {new: true}
                    ).select('-__v')
        .then(JobCreate => {
            if(!JobCreate) {
                return res.status(400).send({
                    message: "Error -> Can NOT update a Job with id = " + req.params.id,
                    error: "Not Found!"
                });
            }

            res.status(200).json(JobCreate);
        }).catch(err => {
            return res.status(500).send({
              message: "Error -> Can not update a Job with id = " + req.params.id,
              error: err.message
            });
        });


})


module.exports = router;