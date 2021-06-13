import React, { Component } from "react";
import { Col } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import './RecruiterSignup.css';
import{
   getFromStorage,
  setInStorage 
} from './utils/storage.js';
import { NotificationManager } from 'react-notifications';

class RecruiterSignup extends Component {
 constructor(props) {
    super(props);

    this.onChangeSignUpUsername = this.onChangeSignUpUsername.bind(this);
    this.onChangeSignUpEmail = this.onChangeSignUpEmail.bind(this);
    this.onChangeSignUpPassword = this.onChangeSignUpPassword.bind(this);
    this.onChangeSignUpPhone = this.onChangeSignUpPhone.bind(this);
    this.onChangeSignUpCompany= this.onChangeSignUpCompany.bind(this);
    this.onSignUp = this.onSignUp.bind(this);

     this.state ={
    isLoading : true,
    signUpError: '',
    signUpUsername:'',
    signUpEmail:'',
    signUpPassword:'',
    signUpPhone:'',
    signUpCompany:'',
}
  }

  onChangeSignUpUsername(e) {
    this.setState({
      signUpUsername: e.target.value
      
    })
  }
   onChangeSignUpEmail(e) {
    this.setState({
      signUpEmail: e.target.value
      
    })
  }
onChangeSignUpPassword(e) {
    this.setState({
      signUpPassword: e.target.value
    })
  }

   onChangeSignUpPhone(e) {
    this.setState({
      signUpPhone: e.target.value
      
    })
  }
  onChangeSignUpCompany(e) {
    this.setState({
      signUpCompany: e.target.value
      
    })
  }
  onSignUp(e){
    const recruiter = {
      username: this.state.signUpUsername,
      email: this.state.signUpEmail,
      password: this.state.signUpPassword,
      phone: this.state.signUpPhone,
      company: this.state.signUpCompany,

    }


    axios.post('http://localhost:5000/recruiters/Signup', recruiter)
     .then(res => alert(res.data));
      

    this.setState({
      username: '',
      email:'',
      password: '',
      phone: '' , 
      company:''
    })
    
  }
  render() {
     const{
    isLoading,
    token,
    signUpError,
    signUpUsername,
    signUpEmail,
    signUpPassword,
    signUpPhone,
    signUpCompany

    } =this.state;

    if(!token){
        return (
         <div className ="RecruiterSignup">
         <br/>
          {
        (signUpError)? (
          <p> {signUpError}</p>
          ) : (null)

       }
      <div>
      <div className = "form-container">
            <div className = "form-content-left1">   
            </div>
          <div className = "form-content-right1">
            <form>

                <div className="form-group">
                <h3>Sign Up</h3>
          </div>
                <div className="form-group">
        
            <input type = "text" 
              required
              id = "jobtitle"
              name = "jobtitle"
              className = "form-input" 
                placeholder = "Enter Username"
                value={signUpUsername}
                onChange={this.onChangeSignUpUsername}
              />
                </div>

                <div className="form-group">
              
                     <input  type="text"
                required
                className="form-input"
                 placeholder = "Enter your Email*"
                value={signUpEmail}
                onChange={this.onChangeSignUpEmail}
                required/>
                </div>

                <div className="form-group">
                   
                     <input  type="password"
                required
                className="form-input"
                 placeholder = "Enter your Password*"
                value={signUpPassword}
                onChange={this.onChangeSignUpPassword}
                required/>
                </div>
 
                <div className="form-group">

                     <input  type="text"
                required
                className="form-input"
                 placeholder = "Enter your phone number*"
                value={signUpPhone}
                onChange={this.onChangeSignUpPhone}
                required/>
                </div>
 <div className="form-group">
                  
                     <input  type="text"
                required
                className="form-input"
                placeholder = "Enter company name*"
                value={signUpCompany}
                onChange={this.onChangeSignUpCompany}
                required/>
                </div>
  


                 <div className="form-group">
            <button className="btn btn-primary btn-block" onClick={this.onSignUp}>Sign Up</button>
          </div>
                <p className="forgot-password text-right">
                    Already registered <a href="./RecruiterLogin">sign in?</a>
                </p>
              

            </form>
            </div>

            </div>
            </div>
            <br/>
            <br/><br/><br/>
            
            </div>
        );
    }
}
}
export default RecruiterSignup;