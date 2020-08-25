const router =require('express').Router();
let Candidate = require('../models/candidate.model');

router.route('/').get((req ,res) =>{
	Candidate.find()
	.then(candidates =>res.json(candidates))
	.catch(err =>res.status(400).json('Error;' + err));
});

router.route('/add').post((req ,res) =>{
const username = req.body.username;
const email = req.body.email;
const password = req.body.password;
const phone = req.body.phone;

const newCandidate = new Candidate({username , email , password , phone});

newCandidate.save()
 .then(() => res.json('Candidate added!'))
 .catch (err => res.status(400).json('Error:' + err));
 });

router.route('/:id').get((req ,res) => {
	Candidate.findById(req.params.id)
	.then(candidate => res.json(candidate))
	.catch(err => res.status(400).json('Error:' + err));
		});


router.route('/:id').delete((req ,res) =>{
	Candidate.findByIdAndDelete(req.params.id)
	.then(candidate => res.json('Candidate deleted'))
	.catch(err => res.status(400).json('Error:' + err));
		});

	router.route('/update/:id').post((req ,res) =>{
	Candidate.findById(req.params.id)
	.then(candidate => {
		candidate.username =req.body.username;
		candidate.email=req.body.email;
		candidate.password =req.body.password;
		candidate.phone=req.body.phone;
	
		candidate.save()
		.then(() => res.json('Candidate Updated!'))
		.catch(err => res.status(400).json('Error :' + err));
	})
		.catch(err => res.status(400).json('Error :' + err));
});

 module.exports =router;