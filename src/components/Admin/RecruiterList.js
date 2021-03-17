import React, { Component } from 'react';
import { Card, Button,ButtonGroup, CardText, Row, Col } from 'reactstrap';
import axios from 'axios';
import { Table, Alert } from 'react-bootstrap';

 class RecruiterList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      recruiters: [],
      response: {}
    }
  }

 componentDidMount() {
    axios.get('http://localhost:5000/Recruiters/')
      .then(response => {
        this.setState({ recruiters: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }
 async remove(id) {
 await fetch(`http://localhost:5000/Recruiters/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedRecruiters = [...this.state.Recruiters].filter(i => i.id !== id);
      this.setState({Recruiters: updatedRecruiters});
    });
  }
render() {
    const { error, recruiters} = this.state;

    if(error) {
      return (
        <div>Error: {error.message}</div>
      )
    } else {
      return(
        <div>
          <h2>Recruiters List</h2>
          {this.state.response.message && <Alert variant="info">{this.state.response.message}</Alert>}
          <Table>
        <thead className="thead">
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Phone </th>
              <th>Company</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
             <tbody>
              {recruiters.map(recruiter => (
                <tr key={recruiter.id}>
                  <td>{recruiter.username}</td>
                  <td>{recruiter.email}</td>
                  <td>{recruiter.phone}</td>
                  <td>{recruiter.company}</td>
                  <td>     
                <ButtonGroup>
            
            <Button size="sm" color="danger" onClick={() => this.remove(recruiter.id)}>Delete</Button>
          </ButtonGroup>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <br/>
          <br/>
        </div>
      )
    }
  }
}
export default RecruiterList;


