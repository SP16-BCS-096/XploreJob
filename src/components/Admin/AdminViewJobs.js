import React, { Component } from 'react';
import { Card, Button, CardText, Row, Col } from 'reactstrap';
import {ButtonGroup, Container, Table } from 'reactstrap'
import axios from 'axios';
import { Link } from 'react-router-dom';

import Toolbar from './Toolbar/Toolbar';
 import './AdminViewJobs.css';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const JobCreate = props => (
<tr>
<div className="thead-dark">
<div style={{marginLeft: 90, marginRight: 50}}>
<hr/>


    <tr><b>JobTitle: </b><th></th><b>Company: </b></tr>
    <tr>{props.JobCreate.JobTitle}<th></th> {props.JobCreate.CompanyName}</tr>

    <tr><b>JobDescription:</b></tr>
    <tr>{props.JobCreate.JobDescription}</tr>
  
    <tr><b>Category:</b><th></th><b>Phone:</b></tr> 
    <tr> {props.JobCreate.Category}<th></th> {props.JobCreate.Phone}</tr>

    <tr><b>Address: </b></tr>
    <tr> {props.JobCreate.Address}</tr>

    <tr><b>WorkType: </b><th></th><b>Salary: </b></tr>
    <tr>{props.JobCreate.WorkType}<th></th> {props.JobCreate.Salary}</tr>

    <tr><b>StartDate: </b><th></th><b>EndDate: </b></tr>
    <tr>{props.JobCreate.StartDate}<th></th> {props.JobCreate.EndDate}</tr>
    <tr>
    <Button size="sm" color="danger" onClick={() => this.remove(JobCreate.id)}>Delete</Button>
</tr>
<hr/>
  

</div>
    </div>
  
</tr>
)

export default class JobsList extends Component {
 constructor(props) {
    super(props);
    this.state = {JobCreate: [], isLoading: true};
    this.remove = this.remove.bind(this);
  }

   componentDidMount() {
    axios.get('http://localhost:5000/JobCreate/')
      .then(response => {
        this.setState({ JobCreate: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

   JobCreateList() {
    return this.state.JobCreate.map(currentJobCreate => {
      return <JobCreate JobCreate={currentJobCreate} deleteCv={this.deleteJobCreate} key={currentJobCreate._id}/>;
    })
  }
   

async remove(id) {
 await fetch(`http://localhost:5000/JobCreate/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedJobCreate = [...this.state.JobCreate].filter(i => i.id !== id);
      this.setState({JobCreate: updatedJobCreate});
    });
  }

    render() {
      const {JobCreate, isLoading} = this.state;
    return (
     <div className= "AdminViewJobsList" >
     <Toolbar />
      <Col sm="12">
        <h2>List of Jobs</h2>
        <div >
          <tbody>
            { this.JobCreateList() }
          </tbody>
        
        </div>
        
        </Col>
        <br/>
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



















   





 
























   