

import React, { useState, useEffect } from 'react';
import {Button} from 'react-bootstrap';
import download from 'downloadjs';
import axios from 'axios';
import './CvList.css'
import Toolbar from "./Toolbar/Toolbar"; 
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const CvList = () => {
  const [filesList, setFilesList] = useState([]);
   const [file, setFile] = useState(null); 
  const [errorMsg, setErrorMsg] = useState('');
  const [state, setState] = useState({
    title: '',
    description: '',
    file_Rank:''
  });

  useEffect(() => {
    const getFilesList = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/Cv/getAllFiles');
        setErrorMsg('');
        setFilesList(data);
      } catch (error) {
        error.response && setErrorMsg(error.response.data);
      }
    };

    getFilesList();
  }, []);

  const downloadFile = async (path, mimetype) => {
    try {
      const result = await axios.get('http://localhost:5000/Cv/download/:id', {
        responseType: 'blob'
      });
      const split = path.split('/');
      const filename = split[split.length - 1];
      setErrorMsg('');
      return download(result.data, filename, mimetype);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMsg('Error while downloading file. Try again later');
      }
    }
  };
  const Score = async (event) => {
  try {
    const { title, description } = state;
    if (title.trim() !== '' && description.trim() !== '') {
      if (file) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', title);
        formData.append('description', description);

        setErrorMsg('Cv Added');
        await axios.post('http://localhost:5000/Cv/Rank', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
      } else {
        setErrorMsg('Error.');
      }
    } else {
      setErrorMsg('select right format of cv.');
    }
  } catch (error) {
    error.response && setErrorMsg(error.response.data);
  }

};
const handleOnRank = async (event) => {
  event.preventDefault();

  try {
    
      if (file) {
        const formData = new FormData();
        formData.append('file', file);
        
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


  return (
    <div className="CvList">
    <Toolbar/>
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <table className="table">
      <thead className="thead-light">
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Download File</th>
            <th>Rank</th>
          </tr>
        </thead>
        <tbody>
          {filesList.length > 0 ? (
            filesList.map(
              ({ _id, title, description, file_path, file_mimetype, file_Rank}) => (
                <tr key={_id}>
                  <td className="file-title">{title}</td>
                  <td className="file-description">{description}</td>
                  <td>
                    <a
                      href="#/"
                      onClick={() =>
                        downloadFile(_id, file_path, file_mimetype)
                      }
                    >
                      Download
                    </a>
                  </td>
                   <td className ="file_Rank">{file_Rank}</td>
                 
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
      <br/>
                </tr>
              )
            )
          ) : (
            <tr>
              <td colSpan={3} style={{ fontWeight: '300' }}>
               <h1> No Candidate Apply yet.</h1></td>
                  <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CvList;