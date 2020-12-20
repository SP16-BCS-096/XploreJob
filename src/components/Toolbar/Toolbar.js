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
                    <li><a href="/mainmenu">Main Menu</a></li>
                    <li><a href="/">Help and FAQ ?</a></li>
                    <li><a href="/logout">Logout</a></li>
                </ul>
            </div>
        
    </nav>
</header>
    );
}

export default toolbar;