import React from "react";
import ReactDOM from "react-dom";
import * as Survey from "survey-react";
import Toolbar from './Toolbar/Toolbar';

import "survey-react/survey.css";

function Questionnare() {
  let json = {
    "pages": [
      {
       name: "page1",
      elements: [
       {
     "type": "text",
     "name": "question1",
     "title": "Your Name",
     "isRequired": true
    },
    {
     "type": "text",
     "name": "question2",
     "title": "Email",
     "isRequired": true
    },
        {
         type: "comment",
         name: "question3",
         title: "Tell us Something About u",
         isRequired: true
        },
        
        {
         type: "comment",
         name: "question4",
         title: "How did you learn about this platform?",
         isRequired: true
        },
        {
         type: "comment",
         name: "question5",
         title: "List all software you have used that’s related to your field.",
         isRequired: true
        },
       
        {
         type: "comment",
         name: "question6",
         title: "What are your salary expectations?",
         isRequired: true
        }
       ]
      }
     ]
  };
  
  var surveyRender = <Survey.Survey json={json} />;
  return (
    <div className="Sarvey">
    <Toolbar/>
      <h2>Questionnare</h2>
      {surveyRender}
    </div>
  );
}

export default Questionnare;
