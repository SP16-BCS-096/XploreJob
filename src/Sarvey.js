import React from "react";
import ReactDOM from "react-dom";
import * as Survey from "survey-react";

import "survey-react/survey.css";

function Sarvey() {
  let json = {
    "pages": [
      {
       name: "page1",
      elements: [
        {
         type: "comment",
         name: "question2",
         title: "Tell us Something About u",
         isRequired: true
        },
        {
         type: "comment",
         name: "question1",
         title: "If you’re currently working, how much notice do you need to give to your employer",
         isRequired: true
        },
        {
         type: "comment",
         name: "question7",
         title: "How did you learn about this job?",
         isRequired: true
        },
        {
         type: "comment",
         name: "question5",
         title: "List all software you have used that’s related to this position.",
         isRequired: true
        },
        {
         type: "comment",
         name: "question6",
         visibleIf: "{question1} notempty",
         title: "How does this position fit in with your long-term goals?",
         isRequired: true
        },
        {
         type: "comment",
         name: "question4",
         title: "Why would you like to work with our company?",
         isRequired: true
        },
        {
         type: "comment",
         name: "question3",
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
      <h2>Questionnare</h2>
      {surveyRender}
    </div>
  );
}

export default Sarvey;