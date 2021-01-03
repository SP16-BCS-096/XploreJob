import React, { Component } from "react";
import axios from 'axios';
import './Cv.css';
import Toolbar from "./Toolbar/Toolbar";
import Pdf from "react-to-pdf";
const ref = React.createRef();

class Cv extends Component{
  constructor(props) {
    super(props);

   
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeContactNo = this.onChangeContactNo.bind(this);
    this.onChangePresentAddress = this.onChangePresentAddress.bind(this);
    this.onChangePermanentAddress= this.onChangePermanentAddress.bind(this);
    this.onChangeDegreeTitle = this.onChangeDegreeTitle.bind(this);
    this.onChangeCGPA = this.onChangeCGPA.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onChangeInstitute = this.onChangeInstitute.bind(this);
    this.onChangeJobPost = this.onChangeJobPost.bind(this);
    this.onChangeCompany = this.onChangeCompany.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangePostStatus = this.onChangePostStatus.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
    this.onUpdate = this.onUpdate.bind(this);

    this.state = {
    FirstName : '',
    LastName :'',
    Email : '',
    ContactNo: '',
    PresentAddress: '',
    PermanentAddress : '',
    DegreeTitle: '',
    CGPA :  '',
    Year : '',
    Institute : '',
    JobPost: '',
    Company: '',
    Address: '',
    PostStatus:''
    }
  }

  
   onChangeFirstName(e) {
    this.setState({
      FirstName: e.target.value
      
    })
  }
onChangeLastName(e) {
    this.setState({
      
      LastName: e.target.value
    })
  }
   onChangeEmail(e) {
    this.setState({
      Email: e.target.value
      
    })
  }
  onChangeContactNo(e) {
    this.setState({
      
      ContactNo: e.target.value
    })
  }

  onChangePresentAddress(e) {
    this.setState({
      
      PresentAddress: e.target.value
    })
  }

  onChangePermanentAddress(e) {
    this.setState({
      
      PermanentAddress: e.target.value
    })
  }
  onChangeDegreeTitle(e) {
    this.setState({
      
      DegreeTitle: e.target.value
    })
  }
  onChangeCGPA(e) {
    this.setState({
      
      CGPA: e.target.value
    })
  }
  onChangeYear(e) {
    this.setState({
      
      Year: e.target.value
    })
  }
  onChangeInstitute(e) {
    this.setState({
      
      Institute: e.target.value
    })
  }
  onChangeJobPost(e) {
    this.setState({
      
      JobPost: e.target.value
    })
  }
  onChangeCompany(e) {
    this.setState({
      
      Company: e.target.value
    })
  }
  onChangeAddress(e) {
    this.setState({
      
      Address: e.target.value
    })
  }
  onChangePostStatus(e) {
    this.setState({
      
      PostStatus: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const Cv = {

      FirstName:this.state.FirstName,
      LastName : this.state.LastName,
      Email :this.state.Email,
      ContactNo :this.state.ContactNo,
      PresentAddress :this.state.PresentAddress,
      PermanentAddress : this.state.PermanentAddress,
      DegreeTitle : this.state.DegreeTitle,
      CGPA : this.state.CGPA,
      Year : this.state.Year,
      Institute : this.state.Institute,
      JobPost : this.state.JobPost,
      Company : this.state.Company,
      Address : this.state.Address,
      PostStatus : this.state.PostStatus,
    }
  
  axios.post('http://localhost:5000/Cv/add', Cv)
      .then(res => console.log(res.data));

    this.setState({
    FirstName : '',
    LastName :'',
    Email : '',
    ContactNo: '',
    PresentAddress: '',
    PermanentAddress : '',
    DegreeTitle: '',
    CGPA :  '',
    Year : '',
    Institute : '',
    JobPost: '',
    Company: '',
    Address: '',
    PostStatus:''
    })
  };
    onUpdate(e) {
    e.preventDefault();

    const Cv = {

      FirstName:this.state.FirstName,
      LastName : this.state.LastName,
      Email :this.state.Email,
      ContactNo :this.state.ContactNo,
      PresentAddress :this.state.PresentAddress,
      PermanentAddress : this.state.PermanentAddress,
      DegreeTitle : this.state.DegreeTitle,
      CGPA : this.state.CGPA,
      Year : this.state.Year,
      Institute : this.state.Institute,
      JobPost : this.state.JobPost,
      Company : this.state.Company,
      Address : this.state.Address,
      PostStatus : this.state.PostStatus
    }

    
  axios.post('http://localhost:5000/Cv/update', Cv)
      .then(res => console.log(res.data));

    this.setState({
    FirstName : '',
    LastName :'',
    Email : '',
    ContactNo: '',
    PresentAddress: '',
    PermanentAddress : '',
    DegreeTitle: '',
    CGPA :  '',
    Year : '',
    Institute : '',
    JobPost: '',
    Company: '',
    Address: '',
    PostStatus:''
    })
  }
  render() {
        return (
          <div>
          <Toolbar />
        <div className ="container" >
    
  <div style ={{ marginRight: 50 ,marginLeft: 25}}>
  <div ref={ref}>
<div className="row">
<div className="col">
<h4>Upload Information</h4>

<ul className="list-unstyled">
                 <div className="form-group">
                    <label>First name</label>
                    <input  type="text"
                required
                className="form-control"
                value={this.state.FirstName}
                onChange={this.onChangeFirstName}
                />
                </div>
                <div className="form-group">
                    <label>Last name</label>
                    <input  type="text"
                required
                className="form-control"
                value={this.state.LastName}
                onChange={this.onChangeLastName}
                />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input  type="text"
                required
                className="form-control"
                value={this.state.Email}
                onChange={this.onChangeEmail}
                />
                </div>
  
</ul>
</div>

<div className="col" style = {{marginTop: 33}}>

<ul className="list-unstyled">
<div className="form-group">
                    <label>Contact No</label>
                    <input  type="text"
                required
                className="form-control"
                value={this.state.ContactNo}
                onChange={this.onChangeContactNo}
                />
                </div>
  <div className="form-group">
                    <label>Present Address</label>
                    <input  type="textBox"
                required
                className="form-control"
                value={this.state.PresentAddress}
                onChange={this.onChangePresentAddress}
                />
                </div><div className="form-group">
                    <label>Permant Address</label>
                    <input  type="textBox"
                required
                className="form-control"
                value={this.state.PermanentAddress}
                onChange={this.onChangePermanentAddress}
                />
                </div>
</ul>
</div>
</div>
<hr />
<h4>Recent Degree</h4>
  <div class="row">
    <div  className="select" style ={{marginTop: 60 ,marginRight: 100}} >
        
  <select name="form-control" value={this.state.DegreeTitle}
                onChange={this.onChangeDegreeTitle}>
  <option >DegreeTitle</option>
  <option >Matric</option>
  <option >Fsc</option>
  <option >BS</option>
  <option >MS</option>
  <option >PHD</option>
 </select>
    </div>

    <div >
     <label>CGPA</label>
                    <input  type="textBox"
                required
                className="form-control"
                value={this.state.CGPA}
                onChange={this.onChangeCGPA}
                />
    </div>
    <div >
     <label>Year</label>
                    <input  type="textBox"
                required
                className="form-control"
                value={this.state.Year}
                onChange={this.onChangeYear}
                />
  
  </div>
  <div >
     <label>Institute</label>
                    <input  type="textBox"
                required
                className="form-control"
                value={this.state.Institute}
                onChange={this.onChangeInstitute}
                />
  
  </div>
</div>

 <hr />
 <h4> Recent Job</h4>
  <div class="row">
    <div  className="form-group">
        <label>JobPost</label>
                    <input  type="textBox"
                required
                className="form-control"
                value={this.state.JobPost}
                onChange={this.onChangeJobPost}
                />
    </div>
    <div >
     <label>Company</label>
                    <input  type="textBox"
                required
                className="form-control"
                value={this.state.Company}
                onChange={this.onChangeCompany}
                />
    </div>
    <div >
     <label>Address</label>
                    <input  type="textBox"
                required
                className="form-control"
                value={this.state.Address}
                onChange={this.onChangeAddress}
                />
  
  </div>
  <div >
     <label>JobStatus</label>
                    <input  type="textBox"
                required
                className="form-control"
                value={this.state.PostStatus}
                onChange={this.onChangePostStatus}
                />
  
  </div>
</div>
 


  </div>
  <br/>
               <br/>
   <div className="form-group">
             <button className="footer-email-link"  onClick={this.onSubmit}>Apply For Job </button>
         {"                      "}

             <button className="footer-email-link"  onClick={this.onUpdate}>Update Cv </button>
              {"                      "}
           {"                      "}
          
        <Pdf targetRef={ref} filename="Cv">
        {({ toPdf }) => <button  className="footer-email-link"  onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      </div>
      <br/>
      </div>
  </div>
    </div>

        );
    }
}
export default Cv;