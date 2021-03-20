
import { Grid, Link, Paper } from '@material-ui/core';
import React from 'react';
import { Route, Router, useHistory } from 'react-router';
import Search from '../Search/Search';
import './CoreUi.css';

const CoreUi = (props) => {
    const history = useHistory();
    
    const { name, photo, cost, prople, id } = props.rider;
    const handleSearchPage = () => {
        history.push("/search");
        history.push(id);
        
    }
    return (
        <div className="core-ui" onClick={handleSearchPage}>
            <img src={photo} alt="" />
            <h4>{name}</h4>
        </div>
    );
};

export default CoreUi;