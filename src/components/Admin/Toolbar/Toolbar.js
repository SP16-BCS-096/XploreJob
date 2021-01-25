import React from 'react';
import "./Toolbar.css";

const toolbar = (props) =>
{
    return(
        
    <header className="toolbar">
    <nav className="toolbar_navigation">
        =
            <div className="toolbar_logo">
              
                
            </div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/logout">logout</a></li>
                    <li><a href="/AdminViewCvList">Cv List</a></li>
                    <li><a href="/AdminViewJobs">JobsList</a></li>
                </ul>
            </div>
        
    </nav>
</header>
    );
}

export default toolbar;