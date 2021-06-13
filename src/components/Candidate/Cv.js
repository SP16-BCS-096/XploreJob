import React, { useState, useRef } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import Toolbar from './Toolbar/Toolbar';
import './Cv.css';

const Cv = (props) => {
  const [file, setFile] = useState(null); 
  const [previewSrc, setPreviewSrc] = useState('');
  const [state, setState] = useState({
    title: '',
    description: ''
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false); // state to show preview only for images
  const dropRef = useRef(); // React ref for managing the hover state of droppable area

  const handleInputChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

const onDrop = (files) => {
  const [uploadedFile] = files;
  setFile(uploadedFile);

  const fileReader = new FileReader();
  fileReader.onload = () => {
    setPreviewSrc(fileReader.result);
  };
  fileReader.readAsDataURL(uploadedFile);
  setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|pdf|png)$/));
};

 const handleOnSubmit = async (event) => {
  event.preventDefault();

  try {
    const { title, description } = state;
    if (title.trim() !== '' && description.trim() !== '') {
      if (file) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', title);
        formData.append('description', description);

        alert('Cv Added');
        await axios.post('http://localhost:5000/Cv/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
      } else {
        alert('Please select a file to add.');
      }
    } else {
      alert('Please enter all the field values.');
    }
  } catch (error) {
    error.response && alert(error.response.data);
  }

};
const handleOnRank = async (event) => {
  event.preventDefault();

  try {
    const { title, description } = state;
      if (file) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', title);
        formData.append('description', description);

        
        await axios.post('http://localhost:5000/Cv/Rank', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
        );
       
      } else {
        alert('Please select a file to add.');
      }
    }  catch (error) {
    error.response && alert(error.response.data);
  }

};
    return(
<div>
<Toolbar/>
<div className="zone">

<div className ="zone1">

  <div id="dropZ">
    <i className="fa fa-cloud-upload"></i>
    <div className ="A"><Dropzone onDrop={onDrop}>
    {({ getRootProps, getInputProps }) => (
      <div {...getRootProps({ className: 'drop-zone' })} ref={dropRef}>
        <input {...getInputProps()} />
        <p>Drag and drop a file OR click here to select a file</p>
        {file && (
          <div>
            <strong>Selected file:</strong> {file.name}
          </div>
        )}
      </div>
    )}
  </Dropzone></div>                    
   
    <div className="selectFile">       
      <label className="file"></label> 
       <Row>
          <Col>
       <input
              type="text"
                name="title"
                className="form-input1"
                value={state.title || ''}
                placeholder="Name"
                onChange={handleInputChange}
              />                  
               </Col>
          </Row>
          <Row>
          <Col>
            
              <input
                type="text"
                 name="description"
                className="form-input2"
                value={state.description || ''}
                placeholder="Document description"
                onChange={handleInputChange}
              />
            
          </Col>
          </Row>
          <div className="upload-section">
  
 
</div>
    
        <tr></tr>
  <Button variant="primary" className="CvPost" type="submit" onClick={handleOnRank}>
          Score
        </Button>

    </div>
   
  </div>
</div>
</div>
</div>
      )
}

export default Cv;