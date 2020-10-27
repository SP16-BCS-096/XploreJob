import React, { Component } from 'react';
import axios from 'axios';


const Recruiter = props => (
  <tr>
    <td>{props.recruiter.username}</td>
    <td>{props.recruiter.email}</td>
     <td>{props.recruiter.password}</td>
    <td>{props.recruiter.phone}</td>
      <td>{props.recruiter.company}</td>
    
  </tr>
)

export default class RecruiterList extends Component {
  constructor(props) {
    super(props);

    this.deleteRecruiters = this.deleteRecruiter.bind(this)

    this.state = {recruiters: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/recruiters/')
      .then(response => {
        this.setState({ recruiters: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteRecruiter(id) {
    axios.delete('http://localhost:5000/recruiters/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      recruiters: this.state.recruiters.filter(el => el._id !== id)
    })
  }

  RecruiterList() {
    return this.state.recruiters.map(currentrecruiter=> {
      return <Recruiter recruiter={currentrecruiter} deleteRecruiter={this.deleterecruiter} key={currentrecruiter._id}/>;
    })
  }

    render() {
    return (
      <div>
        <h2>List of Recruiters</h2>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
              <th>Phone </th>
              <th>Company </th>
            </tr>
          </thead>
          <tbody>
            { this.RecruiterList() }
          </tbody>
        </table>
        
</div>
    )
  }
}