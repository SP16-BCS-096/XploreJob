import React, { Component } from 'react';
import {Row, Col } from 'reactstrap';
import RecruiterList from "./RecruiterList";
import { Link } from 'react-router-dom';
import axios from 'axios';


const Candidate = props => (
  <tr>
    <td>{props.candidate.username}</td>
    <td>{props.candidate.email}</td>
    <td>{props.candidate.password}</td>
    <td>{props.candidate.phone}</td>
    
  </tr>
)

export default class AdminDashboard extends Component {
  constructor(props) {
    super(props);

    this.deleteCandidate = this.deleteCandidate.bind(this)

    this.state = {candidates: []};
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
    axios.delete('http://localhost:5000/candidates/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      candidates: this.state.candidates.filter(el => el._id !== id)
    })
  }

  CandidateList() {
    return this.state.candidates.map(currentcandidate => {
      return <Candidate candidate={currentcandidate} deleteCandidate={this.deletecandidate} key={currentcandidate._id}/>;
    })
  }

    render() {
    return (
      <div>
        <h3>List of Candidates</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
              <th>Phone </th>
            </tr>
          </thead>
          <tbody>
            { this.CandidateList() }
          </tbody>
        </table>
        <RecruiterList />
      </div>

    )
  }
}