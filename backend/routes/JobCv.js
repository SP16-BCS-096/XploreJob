const router = require("express").Router();
var path = require('path');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserSession = require("../models/usersession.model");
const JobCv = require("../models/Cv.model");
const Cvid = require("../models/JobCv.model");
const DegreeTitle = [
  { priority: "Matric"},
  { priority: "Fsc"},
  { priority: "BS" },
  { priority: "MS"},
  { priority:  "PHD"} 
]
let sortingOrder = {
    'Matric' : 0,
    'Fsc' :1,
    'BS': 2,
    'MS': 3,
    'PHD': 4,
    
  
}
router.route('/').get((req, res) => {
  JobCv.find()
    .then(JobCv => 
        res.json(JobCv);
      })
    .catch(err => res.status(400).json('Error: ' + err));
});
 

router.route('/add').post((req , res) => {

JobCv.find({
    Cvid:Cvid
 },(err , previousCv)=>{
if (err) {
return res.send({
        success: false,
        message:'Upload Your Cv'
        }); 
    
}
else if(previousCv.length >0){
  return res.send({
        success: false,
        message: 'Err: Cv already exist.'
        }); 
    
}



  const FirstName = req.body.FirstName;
  const LastName= req.body.LastName;
  const Email = req.body.Email;
  const ContactNo = req.body.ContactNo;
  const PresentAddress = req.body.PresentAddress;
  const PermanentAddress = req.body.PermanentAddress;
  const DegreeTitle =req.body.DegreeTitle;
  const CGPA =req.body.CGPA;
  const Year =req.body.Year;
 const Institute = req.body.Institute;
  const JobPost =req.body.JobPost;
  const Company =req.body.Company;
  const Address =req.body.Address;
  const PostStatus =req.body.PostStatus;

  const newCv = new Cv({
    FirstName,
    LastName,
    Email,
    ContactNo,
    PresentAddress,
    PermanentAddress,
    DegreeTitle,
    CGPA,
    Year,
    Institute,
    JobPost,
    Company,
    Address,
    PostStatus
  });

  newCv.save()
  .then(() => res.json('Cv added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Cv.findById(req.params.id)
    .then(Cv => res.json(Cv))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Cv.findByIdAndDelete(req.params.id)
    .then(() => res.json('JobCv deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Cv.findById(req.params.id)
    .then(Cv => {  
  const FirstName = req.body.Firstname;
  const LastName= req.body.LastName;
  const Email = req.body.Email;
  const ContactNo = req.body.ContactNo;
  const PresentAddress = req.body.PresentAddress;
  const PermanentAddress = req.body.PermanentAddress;
  const DegreeTitle =req.body.DegreeTitle;
  const CGPA =req.body.CGPA;
  const Year =req.body.Year;
  const Institute =req.body.Institute;
  const JobPost =req.body.JobPost;
  const CompanyName =req.body.CompanyName;
  const Address =req.body.Address;
  const PostStatus =req.body.PostStatus;
      Cv.save()
        .then(() => res.json('Cv updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
})



module.exports = router;