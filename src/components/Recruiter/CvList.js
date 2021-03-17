import React, { Component } from 'react';
import { Card, Button, CardText, Row, Col } from 'reactstrap';
import axios from 'axios';
import './CvList.css';
import Toolbar from "./Toolbar/Toolbar"; 
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
const Cv = props => (
<tr>
<div className="thead-dark">
<div style={{marginLeft: 90, marginRight: 50}}>
<hr/>

  
    <h3>Personal Information</h3>
    <hr/>
    <tr><b>FirstName: </b><th></th><b>LastName: </b></tr>
    <tr>{props.Cv.FirstName}<th></th> {props.Cv.LastName}</tr>
  
    <tr><b>Email:</b><th></th><b>ContactNo:</b></tr> 
    <tr>{props.Cv.Email}<th></th> {props.Cv.ContactNo}</tr>

    <tr><b>PresentAddress: </b></tr>
    <tr> {props.Cv.PresentAddress}</tr>

    <tr><b>PermanentAddress:</b></tr>
    <tr> {props.Cv.PermanentAddress}</tr>
<hr/>
    <h3>Edcation Information</h3>
<hr/>
    <tr><b>DegreeTitle:</b></tr>
    <tr>{props.Cv.DegreeTitle}</tr>

    <tr><b>CGPA:</b></tr>
    <tr> {props.Cv.CGPA}</tr>

    <tr><b>Year:</b></tr>
    <tr> {props.Cv.Year}</tr>

    <tr><b>Institute:</b></tr>
    <tr> {props.Cv.Institute}</tr>
<hr/>
   <h3>Experience</h3>
   <hr/>
    <tr><b>JobPost :</b></tr>
    <tr> {props.Cv.JobPost}</tr>

    <tr><b>Company:</b></tr>
    <tr> {props.Cv.Company}</tr>

    <tr><b>Address:</b></tr>
    <tr> {props.Cv.Address}</tr>

    <tr><b>PostStatus:</b></tr>
    <tr>{props.Cv.PostStatus}</tr>
  

</div>
    </div>
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
     <Toolbar />
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
         
      </div>
 
    )
  }
}