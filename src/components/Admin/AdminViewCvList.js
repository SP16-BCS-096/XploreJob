

import React, { useState, useEffect } from 'react';
import download from 'downloadjs';
import axios from 'axios';
import Toolbar from "./Toolbar/Toolbar"; 
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './AdminViewCvList.css';

const AdminViewCvList = () => {

  const [filesList, setFilesList] = useState([]);
  const [file, setFile] = useState(null); 
  const [errorMsg, setErrorMsg] = useState('');
  const [state, setState] = useState({
    title: '',
    description: ''
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

  const downloadFile = async (id, path, mimetype) => {
    try {
      const result = await axios.get('http://localhost:5000/Cv/download/${id}', {
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
  event.preventDefault();

  try {
    const { title, description } = state;
    if (title.trim() !== '' && description.trim() !== '') {
      if (file) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', title);
        formData.append('description', description);

        setErrorMsg('Cv Added');
        await axios.post('http://localhost:5000/Cv/Score', formData, {
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

  return (

    <div className="AdminViewCvList">
    <Toolbar/>
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <table className="table">
    
      <thead className="thead-light">
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Download File</th>
             <th>Score File</th>
          </tr>
        </thead>
        <tbody>
          {filesList.length > 0 ? (
            filesList.map(
              ({ _id, title, description, file_path, file_mimetype }) => (
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
                   <td>
                    <a
                      href="#/"
                      onClick={() =>
                        Score(_id, file_path, file_mimetype)
                      }
                    >
                      Score
                    </a>
                  </td>
                  <br/>
  
                </tr>
              )
            )
          ) : (
            <tr>
              <td colSpan={3} style={{ fontWeight: '300' }}>
               <h1> No Candidate data Available.</h1>
                  <br/>
 

              </td>
            </tr>
          )}
        </tbody>
      </table>
           <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
};

export default AdminViewCvList;