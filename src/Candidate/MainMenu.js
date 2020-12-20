import React,{ useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, Alert } from 'react-bootstrap';
// import { createBrowserHistory as history} from 'history';
import { useHistory } from "react-router-dom";
import { getFromStorage , setInStorage } from "./utils/storage"; 
import CandidateDashboard from "./CandidateDashboard";

// This is the screen that will appear after home screen


import Login from "./CandidateLogin";

const MainMenu = () =>
{
    const [isLoading, setLoading] = useState(true);
    
    const [token, setToken] = useState("");
    
    const history = useHistory();
    // var attempt;
    // attempt = getFromStorage("the_main_app_login_attempt");
    useEffect(() =>
    {
        const token = getFromStorage("the_main_app");
        const loading_variable = getFromStorage("the_main_app_loading");
        
        setLoading(loading_variable.loading_variable);
        if(token)
        {
            // verify token
            axios.get(`http://localhost:5000/candidates/verify?token=${token.token}`)
            // .then(res =>res.json())
                .then(json =>
                    {
                        if(json.status == 200)
                        {
                            console.log("Token verification successful");
                            setToken(token.token);
                            setLoading(false);
                        }
                        else
                        {
                            console.log("Token verification failed");
                            setLoading(false);
                        }
                    })
            
        }
        else
        {
            // no token
            setLoading(false);
        }

    },[]);

    
    
    
    if(isLoading && token.length > 1)
    {
        
        return(<div>
        <p>You Must be Logged in To See this page .. </p>
        <br />
        <Button variant="btn btn-success" onClick={() => history.push('/CandidateLogin')}>Log in</Button>
        </div>);
    }
    if(!token)
    {
        return(
        <div>
        <h1>Welcome, Please login first to View the main Menu : </h1>
        <form>
            <Button variant="btn btn-success" onClick={() => history.push('/CandidateLogin')}>Log in</Button>
          </form>

        
        </div>);
    }
    // If user logged in, take him to the CandidateDashboard
    return(<div><CandidateDashboard /></div>);

    

}

export default MainMenu;