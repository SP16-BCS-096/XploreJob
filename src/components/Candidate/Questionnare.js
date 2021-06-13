import React from "react";
import ReactDOM from "react-dom";
import * as Survey from "survey-react";
import Toolbar from "./Toolbar/Toolbar";

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
        },{
          surveyPostId: '64219482-63d6-43b4-9b73-d8b29bc78bae'
        }
       ]
      }
     ]

  };
  Survey.surveyPostId = '64219482-63d6-43b4-9b73-d8b29bc78bae';
function sendDataToServer(Survey) {
  Survey.sendResult('64219482-63d6-43b4-9b73-d8b29bc78bae');
} 
  var surveyRender = <Survey.Survey json={json} />;
  return (
    <div className="Sarvey">
     <Toolbar />
      <h1>Questionnare</h1>
      {surveyRender}
      <br/>
      <br/>

    </div>
  );
}

export default Questionnare;