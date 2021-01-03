import React, { Component } from 'react';
import { Card, Button, CardText, Row, Col } from 'reactstrap';
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
deleteRecuiter(id) {
    axios.delete('http://localhost:5000/Recruiters/:id')
      .then(response => { console.log(response.data)});

    this.setState({
      recruiters: this.state.recruiters.filter(el => el._id !== id)
    })
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
          <h2>Recruiters List List</h2>
          {this.state.response.message && <Alert variant="info">{this.state.response.message}</Alert>}
          <Table>
        <thead className="thead-light">
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
                <Button variant="danger" onClick={() => this.deleteRecuiter(recruiter.id)}>Delete</Button>
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


