import React from 'react';
import { useHistory } from 'react-router';
import './CoreUi.css';

const CoreUi = (props) => {
    const history = useHistory();
    
    const { name, photo, id } = props.rider;
    const handleSearchPage = () => {
        history.push(`/search/${id}`);
        
    }
    return (
        <div className="core-ui" onClick={handleSearchPage}>
            <img src={photo} alt="" />
            <h4>{name}</h4>
        </div>
    );
};

export default CoreUi;