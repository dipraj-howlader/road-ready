import { Box, Button } from '@material-ui/core';
import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import Login from '../Login/Login';
import './Header.css'
const Header = () => {
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let userName ='';
    const handleLogIn =()=> {
        history.push("/login");
        userName=loggedInUser.displayName;

    }
    return (
        <div className="header">
            <Box height flexGrow={0.9}><h1>Road-Ready</h1></Box>
            <Box>
                <nav>
                    <Link style={{ textDecoration: 'none', padding: '8px', color: 'black' }} to="/home">Home</Link>
                    <Link style={{ textDecoration: 'none', padding: '8px', color: 'black' }} to="/destination">Destination</Link>
                    <Link style={{ textDecoration: 'none', padding: '8px', color: 'black' }} to="/blog">Blog</Link>
                    <Link style={{ textDecoration: 'none', padding: '8px', color: 'black' }} to="/contact">Contact</Link>
                    { loggedInUser.displayName===userName ? <p>{loggedInUser.displayName}</p> : 
        <Button onClick={handleLogIn} variant="contained" color="primary">Sign In</Button>}

                </nav>
            </Box>
        </div>
    );
};

export default Header;