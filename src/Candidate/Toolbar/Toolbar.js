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
                    
                    <li><a href="/logout">Logout</a></li>
                    <li><a href="/CvList">CvList</a></li>
                    <li><a href="/ViewJobsList">JobsList</a></li>
                </ul>
            </div>
        
    </nav>
</header>
    );
}

export default toolbar;