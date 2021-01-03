import React, { Component } from 'react';
import { Card, Button, CardText, Row, Col } from 'reactstrap';
import axios from 'axios';
import './CvList.css';
 

const Cv = props => (
<tr>
<div className="thead-light">
    <tr>FirstName: <th></th>{props.Cv.FirstName}</tr>
    <tr>LastName: <th> </th> {props.Cv.LastName}</tr>
    <tr>Email:<th> </th>{props.Cv.Email}</tr>
    <tr>ContactNo:<th> </th> {props.Cv.ContactNo}</tr>
    <tr>PresentAddress: <th> </th> {props.Cv.PresentAddress}</tr>
    <tr>PermanentAddress:<th> </th> {props.Cv.PermanentAddress}</tr>
    <tr>DegreeTitle:<th> </th> {props.Cv.DegreeTitle}</tr>
    <tr>CGPA:<th> </th> {props.Cv.CGPA}</tr>
    <tr>Year:<th> </th> {props.Cv.Year}</tr>
    <tr>Institute:<th> </th> {props.Cv.Institute}</tr>
    <tr>JobPost :<th> </th> {props.Cv.JobPost}</tr>
    <tr>Company:<th> </th> {props.Cv.Company}</tr>
    <tr>Address:<th> </th> {props.Cv.Address}</tr>
    <tr>PostStatus:<th> </th>{props.Cv.PostStatus}</tr>
 

    </div>
    <br/>
    <br/>
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
     <div className="CvList">
      <Col sm="12">
        <h2>List of Candidates Data</h2>
        <div >
          <tbody>
            { this.CvList() }
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
         <br/>
         <br/>
      </div>
 
    )
  }
}