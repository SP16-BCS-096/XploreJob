import React, {Component} from 'react';
import "react-slideshow-image/dist/styles.css";
import { Card, Button, CardText, Row, Col } from 'reactstrap';
import './Dashboard.css';
import Slideshow from './Slideshow';
class Dashboard extends Component {
  render() {
  return (
    <div>
    <Slideshow />
    <div className ="Dashboard-container">
    

    <div style={{marginLeft: 300}}>
     
    <Row>
      <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img width="300px" height="250px" src="https://www.indeed.com/hire/imgs/employer-confirmation-seeker.svg" alt="" />
    <h2>Looking For a Job</h2>
    </div>
    <div class="flip-card-back">
  <img width="300px" height="250px" src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
      <a href="./CandidateSignup"> Candidate Signup</a>
     
    </div>
  </div>
</div>
      <Col sm="4">
         <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img width="300px" height="250px" src="https://www.indeed.com/hire/imgs/employer-confirmation-employer.svg" alt="" />
     <h2>Post A Job</h2>
    </div>
    <div class="flip-card-back">
      <img width="300px" height="250px" src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
      <a href="./RecruiterSignup"> Recruiter Signup</a>
    </div>
  </div>

</div>
      </Col>
    </Row>
    <br/>
    <br/>
    </div>
    </div>
    <div>


<h1>About Us!</h1>



<div class = "words">
<a href="">
    
  </a>
<h1>Our mission is to help people get jobs.And helps Recruiter to get suitable Candidate for their posted Job.
</h1>

<br/>
<br/> 
<br/>
<br/>
  </div>    

</div>
    </div>
  );
}
}
export default Dashboard;