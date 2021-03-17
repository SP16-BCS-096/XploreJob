import React, {Component} from 'react';
import { Card, Button, CardText, Row, Col } from 'reactstrap';
import './Dashboard.css';
class Dashboard extends Component {
  render() {
  return (
    <div className ="container">
    <br/>
    <div style={{marginLeft: 300}}>
     
    <Row>
      <Col sm="4">
        <Card body className ="Card">
          <img width="100%" src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
          <h2><CardText>Post a Job</CardText></h2>
          <Button><a href="./RecruiterSignup"> Recruiter Signup</a></Button>
        </Card>
      </Col>
      <Col sm="4">
        <Card body className ="Card" >
        <img width="100%" src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
          <h2><CardText>Search a Job</CardText></h2>
          <Button><a href="./CandidateSignup"> Candidate Signup</a></Button>
        </Card>
      </Col>
    </Row>
    </div>
    <br/>
    </div>
  );
}
}
export default Dashboard;