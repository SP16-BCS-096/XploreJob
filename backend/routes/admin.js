const router = require("express").Router();
var path = require('path');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Admin = require("../models/admin.model");
const UserSession = require("../models/usersession.model");

router.route('/').get((req, res) => {
  Admin.find()
    .then(admins => res.json(admins))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/Signup').post((req, res ,next) => {
  const {body}= req;
  const{
    password,
  }= body;
  let{
    email
  }= body;
  email=email.toLowerCase();


if (!email){
    return res.send({
        success: false,
        message: 'Error email cant be blank'
        });
}
if (!password){
   return res.send({
        success: false,
        message: 'Error password cant be blank'
        });
}


 Admin.find({
    email:email
 },(err , previousAdmins)=>{
if (err) {
return res.send({
        success: false,
        message:'Err: Server Error'
        }); 
    
}
else if(previousAdmins.length >0){
  return res.send({
        success: false,
        message: 'Err: Account already exist.'
        }); 
    
}

const newAdmin = new Admin();
 newAdmin.email=email;
   newAdmin.password=newAdmin.generateHash(password);
   
   newAdmin.save((err, admin)=>{
    if (err) {
  return res.send({
        success: false,
        message: 'Err: Server Error'
        }); 
}
    return res.send({
        success: true,
        message: 'Signed Up'

        });
      });
      });
 });


router.post("/Signin",(req,res) =>
{
    const {email, password} = req.body;
    let errors = [];
    var email2 = email.toLowerCase();

    if(!email2 || !password)
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
        Admin.findOne({email : email2})
        .then(admin =>
            {
                var valid_password = bcrypt.compareSync(password, admin.password);
                if(!valid_password)
                {
                    return res.status(400).send("Invalid password for user");
                }
                else
                {
                    // User session
                    const user_session = new UserSession();
                    user_session.userId = admin._id;
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