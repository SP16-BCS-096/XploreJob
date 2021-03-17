import React, { Component } from 'react';
import { Card, Button, CardText, Row, Col } from 'reactstrap';
import {ButtonGroup, Container, Table } from 'reactstrap'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './AdminViewJobs.css';
import Toolbar from './Toolbar/Toolbar';
 
export default class AdminViewJobs extends Component{
constructor(props) {
    super(props);
    this.state = {JobCreates: [], isLoading: true};
    this.remove = this.remove.bind(this);
  }
  componentDidMount() {
    this.setState({isLoading: true});

    axios.get('http://localhost:5000/JobCreate/')
      .then(response => {
        this.setState({ JobCreates: response.data , isLoading: false })
      })
      .catch((error) => {
        console.log(error);
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
    const {JobCreates, isLoading} = this.state;

  

    const JobCreateList = JobCreates.map(JobCreate => {
      return <tr key={JobCreate.id}>
      <td>{JobCreate.JobTitle}</td>
    <td> {JobCreate.CompanyName}</td>
    <td> {JobCreate.JobDescription}</td>
    <td> {JobCreate.Category}</td>
    <td> {JobCreate. Address}</td>
    <td> {JobCreate.WorkType}</td>
    <td>{JobCreate.Salary}</td>
    <td>{JobCreate.Phone}</td>
    <td>{JobCreate.StartDate}</td>
    <td>{JobCreate.EndDate}</td>
        <td>
          <ButtonGroup>
            
            <Button size="sm" color="danger" onClick={() => this.remove(JobCreates.id)}>Delete</Button>
          </ButtonGroup>
        </td>
      </tr>
    });

  return (
      <div className = "AdminViewJobsList">
      <Toolbar/>
        <Container fluid>
          <div className="float-right">
          </div>
          <h3>Job List</h3>
          <Table className="mt-4">
            <thead>
              <tr>
              <th>JobTitle</th>
              <th>CompanyName</th>
              <th>JobDescription </th>
              <th>Category</th>
              <th>Address</th>
              <th>WorkType</th>
              <th>Salary</th>
              <th>Phone</th>
              <th>StartDate</th>
              <th>EndDate</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            {JobCreateList}
            </tbody>
          </Table>
        </Container>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        

      </div>
    );
  }
}



























   