import React,{ useState, useEffect } from "react";
import axios from "axios";
import { getFromStorage , setInStorage } from "./utils/storage"; 
import { useHistory } from "react-router-dom";
import './RecruiterLogin.css';
import { NotificationManager } from 'react-notifications';


const RecruiterLogin = () =>  
{


    const history = useHistory();
    const [isLoading, setLoading] = useState(true);
    const [LoginError, setLoginError] = useState([]);
    const [token, setToken] = useState("");
    
    
    const [LoginEmail, setLoginEmail] = useState("");
    const [LoginPassword, setLoginPassword] = useState("");
    

    useEffect(() =>
{
    const obj = getFromStorage("the_main_app");
    const token =  obj;
});


    const LoginHandler = (e) => 
    {
        e.preventDefault();
        setLoading(true);
        if (LoginEmail.trim() ==="" 
        || LoginPassword.trim() ==="") 
        {
            setLoginError([...LoginError,"All fields must be filled"]);
        } else if (LoginPassword < 8) {
            setLoginError([...LoginError,"Password entered was too short, minimum length can be 8 characters"]);
        } else {
            const recruiter = 
            {
                email : LoginEmail.trim(),
                password : LoginPassword.trim()
                
            }
            axios.post('http://localhost:5000/recruiters/signin', recruiter)
            //   .then(res =>res.data.JSON())
                .then(json =>
                    {   
                        if(json.status === 200)
                        {
                            setLoading(false);
                            setLoginPassword("");
                            setLoginEmail("");
                            setToken(json.data.token);

                            setInStorage("the_main_app",{token : json.data.token});
                            setInStorage("the_main_app_loading",{loading_variable : isLoading});
                            // setInStorage("the_main_app_login_attempt",{attempt : true});
                           alert("Success login");
                            history.push("/JobCreate")
                        }
                    })
              .catch(function (error) {
                console.log(error);
                alert(`Error occured : ${error}`);
              });

            }

         
    };



    const changeEmail = (e) => {
        var email = e.target.value;
        setLoginEmail(email);
    };



    const changePassword1 = (e) => {
        var pass1 = e.target.value;
        setLoginPassword(pass1);
    };
 
    return (
      <div className ="Recruitercontainer">
      <br/>
      <div className ="Recruiterlogin" >
        <h1> Sign in</h1>
        <form onSubmit={LoginHandler}>

          <div className="form-group"> 

            <input  type="text"
                required
                className="form-input"
                value={LoginEmail}
                                                    aria-label="email"
                                                    title="Enter your valid Email"
                                                    placeholder = "Enter your valid Email"
                                                    onChange={changeEmail}
                                                     required={true}/>
               </div>
<div className ="form-group">
            <input  type="Password"
                required
                className="form-input"
                value={LoginPassword}
                                                    onChange={changePassword1}
                                                    pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*"
                                                    title="Password must contain UpperCase, LowerCase, Number/SpecialChar and min 8 Chars"
                                                    placeholder = "Enter your valid Password"
                                                    aria-label="password"
                                                    required={true}/>
          </div>
          <div className="form-group">
            <input type="submit" value="Sign In" className="btn btn-primary btn-block" />
          </div>
        </form>
      </div>
      <br/>
      </div>
    )
  }

export default RecruiterLogin;