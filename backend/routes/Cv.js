const router = require("express").Router();
var path = require('path');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
var multer  = require('multer')

const Cv = require("../models/Cv.model");

const EducationStatus = [
  { priority: 'Matric'},
  { priority: 'Fsc'},
  { priority: 'BS' },
  { priority: 'MS'},
  {               }
]
let sortingOrder = {
    'Matric' : 0,
    'Fsc' :1,
    'BS': 2,
    'MS': 3,
    'PHD': 4,
    
  
}


function compare(key, order = 'asc') {
    return function (a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) 
      return 0;
    
  const first = (a[key].toLowerCase() in sortingOrder) ? sortingOrder[a[key]] : Number.MAX_SAFE_INTEGER;
  const second = (b[key].toLowerCase() in sortingOrder) ? sortingOrder[b[key]] : Number.MAX_SAFE_INTEGER;
    
  let result = 0;
  if (first < second) 
      result = -1;
  else if (first > second) 
      result = 1;
  return (order === 'desc') ? ~result : result
    };
}

EducationStatus.sort(compare('category', 'desc'));

router.route('/').get((req, res) => {
  Cv.find()
    .then(Cv => res.json(Cv))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req , res) => {
  app.post('/add', upload.single('Image'), function (req, res, next) {
   const Image = req.body.Image;
})
 
  const FirstName = req.body.FirstName;
  const LastName= req.body.LastName;
  const Email = req.body.Email;
  const ContactNo = req.body.ContactNo;
  const PresentAddress = req.body.PresentAddress;
  const PermanentAddress = req.body.PermanentAddress;
  const DegreeTitle = req.body.DegreeTitle;
  const CGPA =req.body.CGPA;
  const Year =req.body.Year;
  const EducationStatus =req.body.EducationStatus;
  const JobPost =req.body.JobPost;
  const Company =req.body.Company;
  const Address =req.body.Address;
  const PostStatus =req.body.PostStatus;

  const newCv = new Cv({
    Image,
    FirstName,
    LastName,
    Email,
    ContactNo,
    PresentAddress,
    PermanentAddress,
    DegreeTitle,
    CGPA,
    Year,
    EducationStatus,
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
  const Image = req.body.Image;
  const FirstName = req.body.Firstname;
  const LastName= req.body.LastName;
  const Email = req.body.Email;
  const ContactNo = req.body.ContactNo;
  const PresentAddress = req.body.PresentAddress;
  const PermanentAddress = req.body.PermanentAddress;
  const DegreeTitle =req.body.DegreeTitle;
  const CGPA =req.body.CGPA;
  const Year =req.body.Year;
  const EducationStatus =req.body.EducationStatus;
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
