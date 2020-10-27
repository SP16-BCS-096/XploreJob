const router = require("express").Router();
var path = require('path');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Candidate = require("../models/candidate.model");
const UserSession = require("../models/usersession.model");


// Register , for User/customer
router.route('/').get((req, res) => {
  Candidate.find()
    .then(candidates => res.json(candidates))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const phone =req.body.phone;

  const newCandidate = new Candidate({
    username,
    email,
    password,
    phone,
  });

  newCandidate.save()
  .then(() => res.json('Candidate added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Candidate.findById(req.params.id)
    .then(candidate => res.json(candidate))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Candidate.findByIdAndDelete(req.params.id)
    .then(() => res.json('Candidate deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Candidate.findById(req.params.id)
    .then(candidate => {
      candidate.username = req.body.username;
      candidate.email = req.body.email;
      candidate.password = req.body.password;
      candidate.phone = req.body.phone;

      candidate.save()
        .then(() => res.json('Candidate updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
})


// Login , for user/customer
router.post("/login",(req,res) =>
{
    console.log('Asad');
    let {email, password} = req.body;
    var email2 = email.toLowerCase();
    let errors = [];
     

    if(!email || !password)
    {
        errors.push({msg:"Please fill all the fields"});
    }

    if(password.length < 8)
    {
        errors.push({msg: "Password should be atleast 8 characters long"});
    }

    // Email check
    if(!email2.includes("@") || !email2.includes(".com") || email2.length < 9)
    {
        errors.push({msg: "Please provide correct email with atleast 9 characters length"});
    }

    if(errors.length > 0)
    {
        // To send the error messages to frontend
        res.status(400).send(errors);
    }
    else
    {
       Candidate.findOne({email : email})
        .then(user =>
            {
                var valid_password = bcrypt.compareSync(password, candidate.password);
                if(!valid_password)
                {
                    return res.status(400).send("Invalid password for user");
                }
                else
                {
                    // User session
                    const user_session = new UserSession();
                    user_session.userId = user._id;
                    user_session.save()
                    .then(result =>
                        {
                            return res.send({success: true,
                            msg: "valid sign in",
                        token : result._id})
                        })
                .catch(err =>
                    {
                        return res.status(400).send(`Error Signing up : ${err}`);
                    });

                }
            })
            .catch(err =>
                {
                    res.status(400).send(`Error finding user : ${err}`)
                })
    }    

});

// Login verify
router.get("/verify",(req,res) =>
{
    // Verify user token still in DB and not deleted.
    const { query } = req;
    const { token } = query;

    UserSession.find(
        {
            _id : token,
            isDeleted : false,

        })
        .then(sessions =>
            {
                if(sessions.length != 1)
                {
                    return res.status(400).send({success : false , msg: "Invalid login"});
                }
                else
                {
                    return res.send(
                        {
                            success : true,
                            msg: "Login correct"
                        })
                }

            })
        .catch(err =>
            {
                return res.status(400).send(`Login error : ${err}`);
            })  
});
// Logout
// NOTE : for verify and logout, it grabs token from URL
router.get("/logout",(req,res) =>
{
   
    // Verify user token still in DB and not deleted.
    const { query } = req;
    const { token } = query;

    UserSession.findOneAndUpdate(
        {
            _id : token,
            isDeleted : false,

        }, {$set : 
            {
                isDeleted : true
            }})
        .then(sessions =>
            {
              return res.send({success : true,
            msg : "Logged out"});
            })
        .catch(err =>
            {
                return res.status(400).send(`Logout error : ${err}`);
            })


});


module.exports = router;