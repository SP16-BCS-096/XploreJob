import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AdminDashboard from "./components/Admin/AdminDashboard";
import Sarvey from "./components/Recruiter/Sarvey";

import AdminLogin from "./components/Admin/AdminLogin";
import CandidateLogin from "./components/Candidate/CandidateLogin";
import RecruiterLogin from "./components/Recruiter/RecruiterLogin";

import LSogout from "./components/Candidate/Logout";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cv from "./components/Candidate/Cv";
import Logout from"./components/Candidate/Logout";
import Toolbar from"./components/Toolbar/Toolbar";

import JobCreate from "./components/Recruiter/JobCreate";
import CvList from "./components/Recruiter/CvList";
import ViewJobsList from "./components/Admin/ViewJobsList";
import JobsList from "./components/Candidate/JobsList";
import RecruiterSignup from "./components/Recruiter/RecruiterSignup";
import CandidateSignup from "./components/Candidate/CandidateSignup";
   

class App extends Component {
  render() {
    return (
     <div className="age-container">
     <div className="content-wrap">
         <Navbar /> 
         
         <Router>
          <Route path="/" exact component={Dashboard} />
           <Route path="/Sarvey" exact component={Sarvey} />
          <Route path="/CandidateSignup" component={CandidateSignup} />
          <Route path="/RecruiterSignup" component={RecruiterSignup} />
          <Route path="/AdminDashboard" component={AdminDashboard} />
         
          <Route path="/AdminLogin" component={AdminLogin} />
          <Route path="/CandidateLogin" component={CandidateLogin} />
          <Route path="/RecruiterLogin" component={RecruiterLogin} />
          <Route path="/JobCreate" component={JobCreate} />
          <Route path="/JobsList" component={JobsList} />
          <Route path="/ViewJobsList" component={ViewJobsList} />
          <Route path="/Cv" component={Cv} />
          <Route path="/CvList" component={CvList} />
        
          <Route path="/Logout" component={Logout} />
          <Route path="/Toolbar" component={Toolbar} />


           
          
        
          </Router>

          <Footer />

  </div>
  </div>
         
    );
  }
}

export default App;
