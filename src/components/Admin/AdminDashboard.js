import React, { Component } from 'react';
import RecruiterList from './RecruiterList';
import { Card, Button, ButtonGroup, CardText, Row, Col } from 'reactstrap';
import axios from 'axios';
import './AdminDashboard.css';
import Toolbar from './Toolbar/Toolbar';
import { Table, Alert } from 'react-bootstrap';

 class AdminDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      candidates: [],
      response: {}
    }
  }

 componentDidMount() {
    axios.get('http://localhost:5000/candidates/')
      .then(response => {
        this.setState({ candidates: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }
  async remove(id) {
 await fetch(`http://localhost:5000/Candidates/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedCandidates = [...this.state.Candidates].filter(i => i.id !== id);
      this.setState({Candidates: updatedCandidates});
    });
  }
render() {
    const { error, candidates} = this.state;

    if(error) {
      return (
        <div>Error: {error.message}</div>
      )
    } else {
      return(
        <div className ="AdminDashboard">
       <Toolbar />
          <h2>Candidate List</h2>
          {this.state.response.message && <Alert variant="info">{this.state.response.message}</Alert>}
          <Table>
        <thead className="thead">
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Phone </th>
              <th></th>
              <th></th>
            </tr>
          </thead>
             <tbody className = "Admin">
              {candidates.map(candidate => (
                <tr key={candidate.id}>
                  <td>{candidate.username}</td>
                  <td>{candidate.email}</td>
                  <td>{candidate.phone}</td>
                  <td>     
                <ButtonGroup>
            
            <Button size="sm" color="danger" onClick={() => this.remove(candidate.id)}>Delete</Button>
          </ButtonGroup>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <br/>
          <RecruiterList />
          <br/>
          <br/>
        </div>
      )
    }
  }
}
export default AdminDashboard;


