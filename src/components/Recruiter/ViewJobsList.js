import React, { Component } from 'react';
import { Card, Button, CardText, Row, Col } from 'reactstrap';
import {ButtonGroup, Container, Table } from 'reactstrap'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ViewJobsList.css';
import Toolbar from './Toolbar/Toolbar';
 
import './ViewJobsList.css'; 
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

<hr/>
  

</div>
    </div>
  
</tr>
)

export default class ViewJobsList extends Component {
  constructor(props) {
    super(props);

    this.deleteJobCreate= this.deleteJobCreate.bind(this)

    this.state = {JobCreate: []};
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
   deleteJobCreate(id) {
    axios.delete('http://localhost:5000/JobCreates/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      JobCreate: this.state.JobCreate.filter(el => el._id !== id)
    })
  }


  async remove(id) {
   await fetch(`http://localhost:5000/JobCreates/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedJobCreates = [...this.state.JobCreates].filter(i => i.id !== id);
      this.setState({JobCreates: updatedJobCreates});
    });
  }

    render() {
      const {JobCreate, isLoading} = this.state;
    return (
     <div className= "ViewJobsList" >
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



















   