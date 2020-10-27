import React, { Component } from "react";

import { useState, useEffect } from "react";
import axios from "axios";
import { getFromStorage , setInStorage } from "./storage"; 
import { useHistory } from "react-router-dom";
import './CandidateLogin.css';


const CandidateLogin = () =>  
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
            const candidate = 
            {
                email : LoginEmail,
                password : LoginPassword
                
            }
            axios.post('http://localhost:5000/candidates/login', candidate)
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
                            console.log("Success login");
                            history.push("/Dashboard")
                        }
                    })
              .catch(function (error) {
                console.log(error);
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
    }


 
    return (
      <div className ="Candidatecontainer">
      <br/>
      <div className ="CandidateLogin" >
        <h3>Sign In</h3>
        <form onSubmit={LoginHandler}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={LoginEmail}
                                                    aria-label="email"
                                                    title="Enter your valid Email"
                                                    placeholder = "Enter your valid Email"
                                                    onChange={changeEmail}
                                                     required={true}/>
                <label>Password: </label>
            <input  type="Password"
                required
                className="form-control"
                value={LoginPassword}
                                                    onChange={changePassword1}
                                                    pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*"
                                                    title="Password must contain UpperCase, LowerCase, Number/SpecialChar and min 8 Chars"
                                                    placeholder = "Enter your valid Password"
                                                    aria-label="password"
                                                    required={true}/>
          </div>
          <div className="form-group">
            <input type="submit" value="Sign In" className="button" />
          </div>
        </form>
      </div>
      <br/>
      </div>
    )
  }

export default CandidateLogin;