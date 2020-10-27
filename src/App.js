import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AdminDashboard from "./components/AdminDashboard";
import AdminLogin from "./components/AdminLogin";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cv from "./components/Cv";
import CandidateLogin from "./components/CandidateLogin";
import RecruiterLogin from "./components/RecruiterLogin";
import JobCreate from "./components/JobCreate";
import RecruiterSignup from "./components/RecruiterSignup";
import CandidateSignup from "./components/CandidateSignup";
   

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
          <Route path="/AdminLogin" component={AdminLogin} />
          <Route path="/CandidateLogin" component={CandidateLogin} />
          <Route path="/RecruiterLogin" component={RecruiterLogin} />
          <Route path="/JobCreate" component={JobCreate} />
          <Route path="/Cv" component={Cv} />
          
        
          </Router>
          <Footer />

  </div>
  </div>
         
    );
  }
}

export default App;
