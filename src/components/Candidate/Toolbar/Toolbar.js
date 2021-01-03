import React from 'react';
import "./Toolbar.css";
import * as Survey from "survey-react";


import "survey-react/survey.css";


const toolbar = (props) =>
{
    return(
        
    <header className="toolbar">
    <nav className="toolbar_navigation">
        
            <div className="toolbar_logo">
              
                
            </div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">
                <ul>
                    
                    <li><a href="/logout">Logout</a></li>
                    
                    <a href="Questionnare" class="notification">
              Notifications
          </a>
                </ul>
            </div>
        
    </nav>
</header>
    );
}

export default toolbar;