import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import {Row, Col } from 'reactstrap';
import Form from "./task/Form";
class Recruiter extends Component{
  render() {
        return (
        <div style ={{marginTop: 10, marginRight: 50}}>
  <div>
<div className="row">
<div className="col">
<h4>Post A Job</h4>

<ul className="list-unstyled"> 
              
                <div className="form-group">
                    <label>Job Title</label>
                    <input type="text" className="form-control" placeholder="Job Title" />
                </div>
                <div className="form-group">
                    <label>Job Desrciption</label>
                 <textarea name="description"  id="description" className="form-control"></textarea>
                </div>
                <div className="form-group">
                    <label>Required Qualification</label>
                    <input type="text" className="form-control" placeholder="Qualification" />
                </div>
                <div className="form-group">
                    <label>Company web</label>
                    <input type="text" className="form-control" placeholder="Company Web" />
                </div>
  
</ul>
</div>

<div className="col" style = {{marginTop: 33}}>

<ul className="list-unstyled">
<div className="form-group">
                    <label>Company Name</label>
                    <input type="text" className="form-control" placeholder="Company Name" />
                </div>
  <div className="form-group">
                    <label> Address</label>
                    <input type="textBox" className="form-control" placeholder="Address" />
                </div><div className="form-group">
                    <label>Required Experience</label>
                    <input type="textBox" className="form-control" placeholder="Required Experience" />
                </div>
                <div className="form-group">
                    <label>Contact No</label>
                    <input type="text" className="form-control" placeholder="Contact No" />
                </div>
</ul>
</div>
</div>
<hr />
 
 

  </div>
  </div>

        );
    }
}
export default Recruiter;