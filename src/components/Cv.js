import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import {Row, Col } from 'reactstrap';
import Form from "./task/Form";
class Cv extends Component{
  render() {
        return (
        <div style ={{marginTop: 10, marginRight: 50}}>
  <div>
<div className="row">
<div className="col">
<h4>Upload Information</h4>

<ul className="list-unstyled">
 <div className="form-group">
 <label for="img">Select image: </label>
            <input type="file" id="img" name="img" accept="image/*" />
              <input type="submit" /> 
              </div>
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>
                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" placeholder="Email" />
                </div>
  
</ul>
</div>

<div className="col" style = {{marginTop: 33}}>

<ul className="list-unstyled">
<div className="form-group">
                    <label>Contact No</label>
                    <input type="text" className="form-control" placeholder="Contact No" />
                </div>
  <div className="form-group">
                    <label>Present Address</label>
                    <input type="textBox" className="form-control" placeholder="Present Address" />
                </div><div className="form-group">
                    <label>Permant Address</label>
                    <input type="textBox" className="form-control" placeholder="Permant Address" />
                </div>
</ul>
</div>
</div>
<hr />
 <h4> Education</h4>
 <Form />
 <hr />
 <h4> Experience</h4>
 <Form />
 

  </div>
  </div>

        );
    }
}
export default Cv;