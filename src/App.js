import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AdminDashboard from "./components/AdminDashboard";
import Dashboard from "./components/Dashboard";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cv from "./components/Cv";
import Login from "./components/Login";
import Form from "./components/task/Form";
import TaskList from "./components/task/TaskList";

import Recruiter from "./components/Recruiter";
import RecruiterSignup from "./components/RecruiterSignup";
import CandidateSignup from "./components/CandidateSignup";



import logo from "./Images.png";

class App extends Component {
  render() {
    return (
     <div className="age-container">
     <div className="content-wrap">
         <Navbar /> 
         
         <Router>
        <Route path="/" exact component={Dashboard} />
          <Route path="/CandidateSignup" component={CandidateSignup} />
          <Route path="/RecruiterSignup" component={RecruiterSignup} />
          <Route path="/AdminDashboard" component={AdminDashboard} />
          <Route path="/Login" component={Login} />
          <Route path="/Cv" component={Cv} />
           <Route path="/Recruiter" component={Recruiter} />
          </Router>
          <Footer />

  </div>
  </div>
         
    );
  }
}

export default App;
