import React, { useContext } from 'react';
import Ridecost from '../RideCost/Ridecost';
import './SearchResult.css';
import SimpleMap from '../GoogleMap/SimpleMap';
const SearchResult = () => {


    return (

        <div className="search">
            <div>
                <div className="destination">
                    <h6>Mirpur 1</h6>
                    <p>to</p>
                    <h6>Dhanmondi</h6>
                </div>
                <div>
                    <Ridecost></Ridecost>
                </div>
            </div>

            <div>
                <SimpleMap></SimpleMap>
            </div>
        </div>
    );
};

export default SearchResult;