import React, { Component } from "react";
import { Col } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { Form} from 'react-bootstrap';
import DatePicker from "react-date-picker";
import './JobCreate.css';
import Toolbar from './Toolbar/Toolbar';

class JobCreate extends Component {
 constructor(props) {
    super(props);

    this.onChangeJobTitle = this.onChangeJobTitle.bind(this);
    this.onChangeCompanyName = this.onChangeCompanyName.bind(this);
    this.onChangeJobDescription = this.onChangeJobDescription.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeWorkType = this.onChangeWorkType.bind(this);
    this.onChangeSalary = this.onChangeSalary.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeStartDate = this.onChangeStartDate.bind(this);
    this.onChangeEndDate = this.onChangeEndDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
    JobTitle:'',
    CompanyName :'',
    JobDescription :'',
    Category :'',
    Address : '',
    WorkType: '',
    Salary: '',
    Phone: '',
    StartDate :'',
    EndDate:''


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
  onChangeCategory(e) {
    this.setState({
      
      Category: e.target.value
    })
  }
   onChangeAddress(e) {
    this.setState({
      Address: e.target.value
      
    })
  }
  onChangeWorkType(e) {
    this.setState({
      
      WorkType: e.target.value
    })
  }

  onChangeSalary(e) {
    this.setState({
      
      Salary: e.target.value
    })
  }
 onChangePhone(e) {
    this.setState({
      
      Phone: e.target.value
    })
  }

 onChangeStartDate(e) {
    this.setState({
      
      StartDate: e.target.value
    })
  }
   onChangeEndDate(e) {
    this.setState({
      
      EndDate: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();

   var recruiter=localStorage.getItem('recruiter')
    const JobCreate = {
      JobTitle: this.state.JobTitle,
      CompanyName: this.state.CompanyName,
      JobDescription: this.state.JobDescription,
      Category : this.state.Category,
      Address: this.state.Address,
      WorkType: this.state.WorkType,
      Salary  : this.state.Salary,
      Phone: this.state.Phone,
      StartDate : this.state.StartDate,
      EndDate : this.state.EndDate
    }

   
    axios.post('http://localhost:5000/JobCreate/add', JobCreate)
      .then(res => alert(res.data));

    this.setState({
    JobTitle: '' ,
    CompanyName: '' ,
    JobDescription: '',
    Category : '',
    Address : '',
    WorkType: '',
    Salary: '',
    Phone:'',
    StartDate :'',
    EndDate :''
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
                              
<select className ="form-control" value={this.state.Category}
                onChange={this.onChangeCategory}>
  <option >Category</option>
  <option >Administration</option>
  <option >Computer Science</option>
 <option >Accounts</option> 
  
 </select>
</div>
                 <div className="form-group">
                    <label>Salary</label>
                <input  type="text"
                required
                className="form-control"
                value={this.state.Salary}
                onChange={this.onChangeSalary}
                />
                </div>
                 <div className ="form-group">
                 <label>Start Date</label>
                 <DatePicker className ="form-control"
          value={this.state.StartDate}
          format={"MM/dd/yyyy"}
          onChange={(value) => this.setState({StartDate:value})}
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
                    <textarea  type="text"
                required
                className="form-control"
                value={this.state.Address}
                onChange={this.onChangeAddress}
                />
                </div>
                <div className="form-group">
                              
<select className ="form-control" value={this.state.WorkType}
                onChange={this.onChangeWorkType}>
  <option >WorkType</option>
  <option >Full Time</option>
  <option >Part Time</option>
 </select>
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
                <div className ="form-group">
              <label>End Date</label>
                 <DatePicker className ="form-control"
          value={this.state.EndDate}
          format={"MM/dd/yyyy"}
          onChange={(value) => this.setState({EndDate:value})}
        />   
        
        </div>
                 <div className="form-group">
            <button className ="JobPost" onClick={this.onSubmit}>Post Job</button>
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