import React, { Component } from "react";
import axios from 'axios';
import './Cv.css';

import { Box, Typography, Button, ListItem, withStyles } from '@material-ui/core';
import Toolbar from "./Toolbar/Toolbar";
import Pdf from "react-to-pdf";
import { store } from 'react-notifications-component';
const ref = React.createRef();

class Cv extends Component{
  constructor(props) {
    super(props);

   
    this.onChangeFile = this.onChangeFile.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
    

this.state = { 
      File: null
    }

  }

  onChangeFile(e){
  this.setState({
     File: e.target.Files[0]  

    })

  }

 
  onSubmit(e) {
    
    const Cv = {
      File : this.state.File
    }
  
  axios.post('http://localhost:5000/Cv/add', Cv)
      .then(res => alert(res.data));

    this.setState({
   selectedFile:  null
    })
  }
    
   render() {
    return(
<div class="zone">
<div className ="zone1">

  <div id="dropZ">
    <i class="fa fa-cloud-upload"></i>
    <div>Drag and drop your file here</div>                    
    <span>OR</span>
    <div class="selectFile">       
      <label for="file"></label>                   
      <input type="file" name="files[]" id="file"  value={this.state.File}
                onChange={this.onChangeFile} />
         <button className ="CvPost" onClick={this.onSubmit}>Post CV</button>

    </div>
    <p>File size limit : 10 MB</p>
  </div>
</div>
</div>

      )
}
}
export default Cv;