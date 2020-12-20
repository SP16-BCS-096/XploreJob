import React, { Component } from 'react';
import { Card, Button, CardText, Row, Col } from 'reactstrap';
import axios from 'axios';
import'./CandidateDashboard.css';
 
const JobCreate = props => (
<tr>
    <td>{props.JobCreate.JobTitle}</td>
    <td> {props.JobCreate.CompanyName}</td>
    <td> {props.JobCreate.JobDescription}</td>
    <td>{props.JobCreate.Address}</td>
    <td> {props.JobCreate.RequiredQualification}</td>
    <td> {props.JobCreate.RequiredExperience}</td>
    <td> {props.JobCreate.CompanyWeb}</td>
    <td> {props.JobCreate.Phone}</td>
    <td><Button><a href="./Candidate/Cv">Apply for Job</a></Button></td>
</tr>

)

export default class CandidateDashboard extends Component {
  constructor(props) {
    super(props);

    this.deleteJobCreate = this.deleteJobCreate.bind(this)

    this.state = {JobCreates: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/JobCreate/')
      .then(response => {
        this.setState({ JobCreates: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteJobCreate(id) {
    axios.delete('http://localhost:5000/JobCreates/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      JobCreates: this.state.JobCreates.filter(el => el._id !== id)
    })
  }

  JobCreateList() {
    return this.state.JobCreates.map(currentJobCreate => {
      return <JobCreate JobCreate={currentJobCreate} deleteJobCreate={this.deleteJobCreate} key={currentJobCreate._id}/>;
    })
  }

    render() {
    return (
     <div className="AdminDashboard">
      <Col sm="12">
        <h2>List of Candidates</h2>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>JobTitle</th>
              <th>CompanyName</th>
              <th>JobDescription </th>
              <th>Address</th>
              <th>RequiredQualification</th>
              <th>RequiredExperience</th>
              <th>CompanyWeb</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead> 
          <tbody>
            { this.JobCreateList() }
          </tbody>
        
        </table>
        
        </Col>
        <br/>
        <br/>
        <br/>
         <br/>
      </div>
 
    )
  }
}