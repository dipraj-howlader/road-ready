import { Box, Button } from '@material-ui/core';
import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import Login from '../Login/Login';
import './Header.css'
const Header = () => {
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleLogIn =()=> {
        history.push("/login");
    }
    return (
        <div className="header">
            <Box height flexGrow={0.9}><h1>Road-Ready</h1></Box>
            <Box>
                <nav style={{display:'flex'}}>
                    <Link style={{ textDecoration: 'none', padding: '8px', color: 'black' }} to="/home">Home</Link>
                    <Link style={{ textDecoration: 'none', padding: '8px', color: 'black' }} to="/destination">Destination</Link>
                    <Link style={{ textDecoration: 'none', padding: '8px', color: 'black' }} to="/blog">Blog</Link>
                    <Link style={{ textDecoration: 'none', padding: '8px', color: 'black' }} to="/contact">Contact</Link>
                    { loggedInUser.isSignedIn? <p style={{ textDecoration: 'none', padding: '8px', color: 'black' }}>{loggedInUser.name}</p> : <Button onClick={handleLogIn} variant="contained" color="primary">Log In</Button>
                    
                    }

                </nav>
            </Box>
        </div>
    );
};

export default Header;