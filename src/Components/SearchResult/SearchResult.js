import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const SearchResult = () => {
    const [ridersInfo, setRidersInfo] = useContext(UserContext);

    return (
        <div>
            <h1>This is search result</h1>
            {
                ridersInfo.map(id => <div> Name :  <p>{id.id}</p></div>)
            }
        </div>
    );
};

export default SearchResult;