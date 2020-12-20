import React, { Component } from 'react';
import { Card, Button, CardText, Row, Col } from 'reactstrap';
import { useTable } from "react-table-6";
import axios from 'axios';
import'./CandidateDashboard.css';
 
 
const JobCreate = props => (
<div className ="CandidateLogin" >
<tr>
    <td>{props.JobCreate.JobTitle}</td>
    <td> {props.JobCreate.CompanyName}</td>
    <td> {props.JobCreate.JobDescription}</td>
    <td>{props.JobCreate.Address}</td>
    <td> {props.JobCreate.RequiredQualification}</td>
    <td> {props.JobCreate.RequiredExperience}</td>
    <td> {props.JobCreate.CompanyWeb}</td>
    <td> {props.JobCreate.Phone}</td>
</tr>
</div>
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
    <div className="row">
  <div className="column">
    <div className ="CandidateDashboard" >
       <h2>List of Candidates</h2>
         
          <tbody>
          <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Phone </th>
            </tr>
            { this.JobCreateList() }
          </tbody>
          <br/>
             <br/>
                <br/>
       
      </div>
  </div>

</div>
    )
  }
}



