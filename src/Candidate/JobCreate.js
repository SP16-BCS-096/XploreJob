import React, { Component } from "react";
import { Col } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import './RecruiterSignup.css';
import Toolbar from './Toolbar/Toolbar';

class JobCreate extends Component {
 constructor(props) {
    super(props);

    this.onChangeJobTitle = this.onChangeJobTitle.bind(this);
    this.onChangeCompanyName = this.onChangeCompanyName.bind(this);
    this.onChangeJobDescription = this.onChangeJobDescription.bind(this);
    this.onChangeNoofPosts = this.onChangeNoofPosts.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeRequiredQualification = this.onChangeRequiredQualification.bind(this);
    this.onChangeRequiredExperience = this.onChangeRequiredExperience.bind(this);
    this.onChangeCompanyWeb = this.onChangeCompanyWeb.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
    JobTitle: '' ,
    CompanyName: '' ,
    JobDescription: '',
    NoofPosts : '',
    Address: '',
    RequiredQualification: '',
    RequiredExperience: '',
    CompanyWeb: '',
    Phone:''
    }
  }

  onChangeJobTitle(e) {
    this.setState({
      JobTitle: e.target.value
      
    })
  }
   onChangeCompanyName(e) {
    this.setState({
      CompanyName: e.target.value
      
    })
  }
onChangeJobDescription(e) {
    this.setState({
      
      JobDescription: e.target.value
    })
  }
  onChangeNoofPosts(e) {
    this.setState({
      
      NoofPosts: e.target.value
    })
  }
   onChangeAddress(e) {
    this.setState({
      Address: e.target.value
      
    })
  }
  onChangeRequiredQualification(e) {
    this.setState({
      
      RequiredQualification: e.target.value
    })
  }

  onChangeRequiredExperience(e) {
    this.setState({
      
      RequiredExperience: e.target.value
    })
  }

  onChangeCompanyWeb(e) {
    this.setState({
      
      CompanyWeb: e.target.value
    })
  }onChangePhone(e) {
    this.setState({
      
      Phone: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const JobCreate = {
      JobTitle: this.state.JobTitle,
      CompanyName: this.state.CompanyName,
      JobDescription: this.state.JobDescription,
      NoofPosts : this.state.NoofPosts,
      Address: this.state.Address,
      RequiredQualification: this.state.RequiredQualification,
      RequiredExperience: this.state.RequiredExperience,
      CompanyWeb: this.state.CompanyWeb,
      Phone: this.state.Phone
    }

    console.log(JobCreate);

    axios.post('http://localhost:5000/JobCreate/add', JobCreate)
      .then(res => console.log(res.data));

    this.setState({
    JobTitle: '' ,
    CompanyName: '' ,
    JobDescription: '',
    NoofPosts : '',
    Address: '',
    RequiredQualification: '',
    RequiredExperience: '',
    CompanyWeb: '',
    Phone:''
    })
  }
  render() {
        return (
        <div className="container">
        <Toolbar />
  <div>
<div className="row">
<div className="col">
<h4>Post A Job</h4>

<ul className="list-unstyled"> 
              
                <div className="form-group">
                    <label>Job Title</label>
                    <input  type="text"
                required
                className="form-control"
                value={this.state.JobTitle}
                onChange={this.onChangeJobTitle}
                />
                </div>
                <div className="form-group">
                    <label>Job Desrciption</label>
                <textarea  type="textarea"
                required
                className="form-control"
                value={this.state.JobDescription}
                onChange={this.onChangeJobDescription}
                />
                </div>
                <div className="form-group">
                    <label>No of Post</label>
                <input  type="text"
                required
                className="form-control"
                value={this.state.NoofPosts}
                onChange={this.onChangeNoofPosts}
                />
                </div>
                <div className="form-group">
                    <label>Required Qualification</label>
                     <input  type="text"
                required
                className="form-control"
                value={this.state.RequiredQualification}
                onChange={this.onChangeRequiredQualification}
                />
                </div>
                <div className="form-group">
                    <label>Company web</label>
                     <input  type="text"
                required
                className="form-control"
                value={this.state.CompanyWeb}
                onChange={this.onChangeCompanyWeb}
                />
                </div>
  
</ul>
</div>

<div className="col" style = {{marginTop: 33}}>

<ul className="list-unstyled">
<div className="form-group">
                    <label>Company Name</label>
                     <input  type="text"
                required
                className="form-control"
                value={this.state.CompanyName}
                onChange={this.onChangeCompanyName}
                />
                </div>
  <div className="form-group">
                    <label> Address</label>
                    <input  type="text"
                required
                className="form-control"
                value={this.state.Address}
                onChange={this.onChangeAddress}
                />
                </div><div className="form-group">
                    <label>Required Experience</label>
                     <input  type="text"
                required
                className="form-control"
                value={this.state.RequiredExperience}
                onChange={this.onChangeRequiredExperience}
                />
                </div>
                <div className="form-group">
                    <label>Contact No</label>
                     <input  type="text"
                required
                className="form-control"
                value={this.state.Phone}
                onChange={this.onChangePhone}
                />
                </div>
                 <div className="form-group">
            <button onClick={this.onSubmit}>Post Job</button>
          </div>
</ul>
</div>
</div>

 

  </div>
  </div>

        );
    }
}
export default JobCreate;