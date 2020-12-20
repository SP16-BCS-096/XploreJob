import React, { Component } from 'react';
import { Card, Button, CardText, Row, Col } from 'reactstrap';
import axios from 'axios';

 
const Cv = props => (
<tr>
    <td>{props.Cv.Image}</td>
    <td> {props.Cv.FirstName}</td>
    <td> {props.Cv.LastName}</td>
    <td>{props.Cv.Email}</td>
    <td> {props.Cv.ContactNo}</td>
    <td> {props.Cv.PresentAddress}</td>
    <td> {props.Cv.PermanentAddress}</td>
    <td> {props.Cv.DegreeTitle}</td>
    <td> {props.Cv.CGPA}</td>
    <td> {props.Cv.Year}</td>
    <td> {props.Cv.EducationStatus}</td>
    <td> {props.Cv.JobPost}</td>
    <td> {props.Cv.Company}</td>
    <td> {props.Cv.Address}</td>
    <td> {props.Cv.PostStatus}</td>

</tr>

)

export default class CvList extends Component {
  constructor(props) {
    super(props);

    this.deleteCv= this.deleteCv.bind(this)

    this.state = {Cv: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/Cv/')
      .then(response => {
        this.setState({ Cv: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteCv(id) {
    axios.delete('http://localhost:5000/Cv/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      Cv: this.state.Cv.filter(el => el._id !== id)
    })
  }

  CvList() {
    return this.state.Cv.map(currentCv => {
      return <Cv Cv={currentCv} deleteCv={this.deleteCv} key={currentCv._id}/>;
    })
  }

    render() {
    return (
     <div className="AdminDashboard">
      <Col sm="12">
        <h2>List of Candidates</h2>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Image</th>
              <th>FirstName</th>
              <th>LastName </th>
              <th>Email</th>
              <th>ContactNo</th>
              <th>PresentAddress</th>
              <th>PermanentAddress</th>
              <th>DegreeTitle</th>
              <th>CGPA</th>
              <th>Year</th>
              <th>EducationStatus</th>
              <th>JobPost</th>
              <th>Company</th>
              <th>Address</th>
              <th>PostStatus</th>
            </tr>
          </thead> 
          <tbody>
            { this.CvList() }
          </tbody>
        
        </table>
        
        </Col>
        <br/>
        <br/>
        <br/>
         <br/>
      </div>
 
    )
  }
}