import React, { Component } from 'react';
import { Card, Button, CardText, Row, Col } from 'reactstrap';
import axios from 'axios';
import './AdminViewJobs.css';
import Toolbar from './Toolbar/Toolbar';
 
const JobCreate = props => (
<tr>
<div style={{marginLeft: 250, marginRight: 50}}>
   <tr><b>JobTitle</b><th> </th><b>CompanyName</b></tr>
   <tr>{props.JobCreate.JobTitle}<th></th>{props.JobCreate.CompanyName}</tr>

   <tr><b>JobDescription</b><th></th><b>Phone</b> </tr>
   <tr>{props.JobCreate.JobDescription}<th></th> {props.JobCreate.Phone}</tr>
    
    <tr><b>Address</b></tr>
    <tr>{props.JobCreate.Address}</tr>

   <tr><b>MinimumQualification</b><th></th><b>MinimumExperience</b></tr>
    <tr> {props.JobCreate.RequiredQualification}<th></th> {props.JobCreate.RequiredExperience}</tr>
    
   <td><Button variant="danger" onClick={() => this.deleteJobCreate(JobCreate.id)}>Delete</Button></td>
</div>
<tr></tr>
</tr>

)

export default class AdminViewJobs extends Component {
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

     <div className = "AdminViewJobsList">
     <Toolbar />
      <Col sm="12">
        <h2>List of Jobs</h2>
        <table className="table">
          <tbody>
            { this.JobCreateList() }
          </tbody>
        
        </table>
        
        </Col>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
        
         
      </div>
 
    )
  }
}