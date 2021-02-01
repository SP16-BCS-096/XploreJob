import React, { Component } from 'react';
import { Card, Button, CardText, Row, Col } from 'reactstrap';
import axios from 'axios';
import './PreviousJobs.css';
import Toolbar from './Toolbar/Toolbar';
 
const JobCreate = props => (
<tr className ="JobCreate">
    <td>{props.JobCreate.JobTitle}</td>
    <td> {props.JobCreate.CompanyName}</td>
    <td> {props.JobCreate.JobDescription}</td>
    <td>{props.JobCreate.Address}</td>
    <td> {props.JobCreate.RequiredQualification}</td>
    <td> {props.JobCreate.RequiredExperience}</td>

    <td> {props.JobCreate.Phone}</td>
    <td></td>
</tr>

)

export default class PreviousJobs extends Component {
  constructor(props) {
    super(props);

    this.deleteJobCreate = this.deleteJobCreate.bind(this)

    this.state = {JobCreates: []};
  }
  onClick(){
    axios.post('http://localhost:5000/JobCv/add')
      .then(response => {
        this.setState({ JobCreates: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
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
onPost(candidate)
{
 axios.get('http://localhost:5000/Cv/candidate')
      .then(response => { console.log(response.data)});

    this.setState({
      JobCreates: this.state.JobCreates.filter(el => el.candidate !== candidate)   
    })
       axios.post('http://localhost:5000/Cv/add') 
       .then(response => { console.log(response.data)});

    this.setState({
      JobCreates: this.state.JobCreates.filter(el => el.candidate !== candidate)   
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
     <div className = "PreviousJobs">
      <Toolbar />
      <Col sm="12">
        <h1> My Jobs</h1>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>JobTitle</th>
              <th>CompanyName</th>
              <th>JobDescription </th>
              <th>Address</th>
              <th>MinimumQualification</th>
              <th>RequiredExperience</th>
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
        <br/>
         <br/>
         <br/>
           <br/>
      </div>
 
    )
  }
}