import React, { Component } from 'react';
import RecruiterList from './RecruiterList';
import { Card, Button, CardText, Row, Col } from 'reactstrap';
import axios from 'axios';
import './AdminDashboard.css';
import ToolBar from './Toolbar/Toolbar';
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

deleteCandidate(id) {
    axios.delete('http://localhost:5000/Candidates/:id')
      .then(response => { console.log(response.data)});

    this.setState({
      candidates: this.state.candidates.filter(el => el._id !== id)
    })
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

          <h2>Candidate List</h2>
          {this.state.response.message && <Alert variant="info">{this.state.response.message}</Alert>}
          <Table>
        <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Phone </th>
              <th></th>
              <th></th>
            </tr>
          </thead>
             <tbody>
              {candidates.map(candidate => (
                <tr key={candidate.id}>
                  <td>{candidate.username}</td>
                  <td>{candidate.email}</td>
                  <td>{candidate.phone}</td>
                  <td>     
                <Button variant="danger" onClick={() => this.deleteCandidate(candidate.id)}>Delete</Button>
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


