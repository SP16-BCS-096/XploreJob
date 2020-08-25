import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

class Login extends Component {
 constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '', 
      password: ''
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
      
    })
  }
onChangePassword(e) {
    this.setState({
      
      password: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const admin = {
      username: this.state.username,
      password: this.state.password
    }

    console.log(admin);

    axios.post('http://localhost:5000/users/add', admin)
      .then(res => console.log(res.data));

    this.setState({
      username: '',
      password: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Sign In</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
                <label>Password: </label>
            <input  type="Password"
                required
                className="form-control"
                value={this.state.password}
                onChange={this.onChangePassword}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Sign In" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}
export default Login;