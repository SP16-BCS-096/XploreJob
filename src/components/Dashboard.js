import React, {Component} from 'react';
import { Card, Button, CardText, Row, Col } from 'reactstrap';
import './Login.css';
import RecruiterSignup from "./RecruiterSignup";
import CandidateSignup from "./CandidateSignup"
class Dashboard extends Component {
  render() {
  return (
    <div className ="container">
    <div style={{marginTop: 10, marginLeft: 300}}>
     
    <Row>
      <Col sm="4">
        <Card body>
          <img width="100%" src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
          <CardText><h2>Post a Job</h2></CardText>
          <Button><a href="./RecruiterSignup.js"> Recruiter Signup</a></Button>
        </Card>
      </Col>
      <Col sm="4">
        <Card body >
        <img width="100%" src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
          <CardText><h2>Search a Job</h2></CardText>
          <Button><a href="./CandidateSignup"> Candidate Signup</a></Button>
        </Card>
      </Col>
    </Row>
    </div>
    </div>
  );
}
}
export default Dashboard;