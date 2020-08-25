const router =require('express').Router();
let Recruiter = require('../models/recruiter.model');

router.route('/').get((req ,res) =>{
	Recruiter.find()
	.then(recruiters =>res.json(recruiters))
	.catch(err =>res.status(400).json('Error;' + err));
});

router.route('/add').post((req ,res) =>{
const username = req.body.username;
const email = req.body.email;
const password = req.body.password;
const phone = req.body.phone;
const company= req.body.company;

const newRecruiter = new Recruiter({username , email , password , phone, company});

newRecruiter.save()
 .then(() => res.json('Recruiter added!'))
 .catch (err => res.status(400).json('Error:' + err));
 });

router.route('/:id').get((req ,res) => {
	Recruiter.findById(req.params.id)
	.then(recruiter => res.json(recruiter))
	.catch(err => res.status(400).json('Error:' + err));
		});


router.route('/:id').delete((req ,res) =>{
	Recruiter.findByIdAndDelete(req.params.id)
	.then(Recruiter => res.json('Recruiter deleted'))
	.catch(err => res.status(400).json('Error:' + err));
		});

	router.route('/update/:id').post((req ,res) =>{
	Recruiter.findById(req.params.id)
	.then(recruiter => {
		recruiter.username =req.body.username;
		recruiter.email=req.body.email;
		recruiter.password =req.body.password;
		recruiter.phone=req.body.phone;
		recruiter.company=req.body.company;
	
		candidate.save()
		.then(() => res.json('Recruiter Updated!'))
		.catch(err => res.status(400).json('Error :' + err));
	})
		.catch(err => res.status(400).json('Error :' + err));
});

 module.exports =router;