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
          <div className ="JobCreate">
          <Toolbar/>
          <h1>Post A Job</h1>
           <div className = "form-containers">
            <div className = "form-content-left">   
            </div>
          <div className = "form-content-right">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
            <form className = "form">
            
            <div className = "form-inputs">
            <label className = "form-label" htmlFor = "jobtitle">
            Job Title :
            </label>
            <input type = "text" 
              required
              id = "jobtitle"
              name = "jobtitle"
              className = "form-input" 
                placeholder = "Enter The Job Title"
                value={this.state.JobTitle}
                onChange={this.onChangeJobTitle}
              />


            </div>

            <div className = "form-inputs">
            <label className = "form-label" htmlFor = "JobDescription">
            Job Desrciption :
            </label>
            <textarea type="textarea"
                required
              id = "JobDescription"
              name = "JobDescription"
              className = "form-input" 
                placeholder = "Enter your Job Description"
                value={this.state.JobDescription}
                onChange={this.onChangeJobDescription}
                
              />
              </div>
          
            <div className = "form-inputs">
            
            <label className = "form-label" htmlFor = "category">
            Job Category :
            </label>

            <select className = "form-input"  
            name = "category"
            id = "category"
            value={this.state.Category}
                                  onChange={this.onChangeCategory}>
                    <option >Category</option>
                    <option >Administration</option>
                    <option >Computer Science</option>
                  <option >Accounts</option> 
                    
                  </select>
              </div>
            
            <div className = "form-inputs">
            
            <label className = "form-label" htmlFor = "salary">
            Salary :
            </label>


                    <input type = "text" 
                                  required
                                  id = "salary"
                                  name = "salary"
                                  className = "form-input" 
                                    placeholder = "Enter The Salary"
                                    value={this.state.Salary}
                                    onChange={this.onChangeSalary}
                                  />
              </div>

            
            <div className = "form-inputs">
            
            <label className = "form-label" htmlFor = "startdate">
            Start Date :
            </label>


            <DatePicker className = "form-input" 
                required
                id = "startdate"
                name = "startdate"
                value={this.state.StartDate}
                format={"MM/dd/yyyy"}
                onChange={(value) => this.setState({StartDate:value})}
              />   
              </div>
            
            <div className = "form-inputs">
            
            <label className = "form-label" htmlFor = "company">
            Company Name :
            </label>

            <input type = "text" 
                                  required
                                  id = "company"
                                  name = "company"
                                  className = "form-input" 
                                    placeholder = "Enter The Company Name"
                                    value={this.state.CompanyName}
                      onChange={this.onChangeCompanyName}
                                  />

              </div>
        
            <div className = "form-inputs">
            
            <label className = "form-label" htmlFor = "address">
            Address :
            </label>

            <textarea type = "textarea" 
                                  required
                                  id = "address"
                                  name = "address"
                                  className = "form-input" 
                                    placeholder = "Enter Your Address"
                                    value={this.state.Address}
                                    onChange={this.onChangeAddress}
                                  />
              

              </div>
            
            <div className = "form-inputs">
            
            <label className = "form-label" htmlFor = "worktype">
            Work Type :
            </label>
                    <select 
                    required
                    id = "worktype"
                    name = "worktype"
                    className = "form-input"  value={this.state.WorkType}
                      onChange={this.onChangeWorkType}>
        <option >WorkType</option>
        <option >Full Time</option>
        <option >Part Time</option>
       </select>
  

              </div>
            
            <div className = "form-inputs">
            
            <label className = "form-label" htmlFor = "phone">
            Contact No :
            </label>
            
            <input type = "text" 
                                  required
                                  id = "phone"
                                  name = "phone"
                                  className = "form-input" 
                                    placeholder = "Enter The phone number"
                                    value={this.state.Phone}
                                    onChange={this.onChangePhone}
                                  />
                        

              </div>
            
            <div className = "form-inputs">
            
            <label className = "form-label" htmlFor = "enddate">
            End Date :
            </label>
            
                
                   
                   <DatePicker className = "form-input" 
                required
                id = "enddate"
                name = "enddate"
                value={this.state.EndDate}
                format={"MM/dd/yyyy"}
                onChange={(value) => this.setState({EndDate:value})}
              />          

              </div>

              
              <div className = "form-inputs">         

            <button className = "form-input-btn" onClick={this.onSubmit}>Post Job</button>
            </div>
            </form>
          
          </div>
          </div>
          <br/>
          <br/>
          </div>
        )    
    }
}
export default JobCreate;



