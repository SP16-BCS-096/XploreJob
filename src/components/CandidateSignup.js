import React, { Component } from "react";
import { Col } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import './CandidateSignup.css';

class CandidateSignup extends Component {
 constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangephone = this.onChangephone.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      email: '', 
      password: '',
      phone: ''
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
      
    })
  }
   onChangeEmail(e) {
    this.setState({
      email: e.target.value
      
    })
  }
onChangePassword(e) {
    this.setState({
      
      password: e.target.value
    })
  }
   onChangephone(e) {
    this.setState({
      phone: e.target.value
      
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const candidate = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      phone: this.state.phone

    }

    console.log(candidate);

    axios.post('http://localhost:5000/candidates/add', candidate)
      .then(res => console.log(res.data));

    this.setState({
      username: '',
      email:'',
      password: '',
      phone: '' 
    })
  }
  render() {
        return (
        	<div className ="SignUpcontainer">
          <br/>

          <div className ="CandidateSignup">
            <form>
          <Col sm="4">
                <h3>Sign Up</h3>
          
                <div className="form-group">
                    <label>User name</label>
                    <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
                </div>

                <div className="form-group">
                    <label>Email</label>
                     <input  type="text"
                required
                className="form-control"
                value={this.state.email}
                onChange={this.onChangeEmail}
                />
                </div>

                <div className="form-group">
                    <label>Password</label>
                     <input  type="text"
                required
                className="form-control"
                value={this.state.password}
                onChange={this.onChangePassword}
                />
                </div>
 
                <div className="form-group">
                    <label>Phone</label>
                     <input  type="text"
                required
                className="form-control"
                value={this.state.phone}
                onChange={this.onChangephone}
                />
                </div>

  


                 <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
                <p className="forgot-password text-right">
                    Already registered <a href="./CandidateLogin">sign in?</a>
                </p>
                </Col>

            </form>
            </div>
            <br/>
            </div>
        );
    }
}

export default CandidateSignup;