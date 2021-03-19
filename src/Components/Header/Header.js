import { Box } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <Box height flexGrow={0.9}><h1>Road-Ready</h1></Box>
            <Box>
                <nav>
                    <Link style={{textDecoration:'none', padding:'8px',color:'black'}} to="/home">Home</Link>
                    <Link style={{textDecoration:'none', padding:'8px',color:'black'}} to="/destination">Destination</Link>
                    <Link style={{textDecoration:'none', padding:'8px',color:'black'}} to="/blog">Blog</Link>
                    <Link style={{textDecoration:'none', padding:'8px',color:'black'}} to="/contact">Contact</Link>
                    <button>Log In</button>
                </nav>
            </Box>
        </div>
    );
};

export default Header;