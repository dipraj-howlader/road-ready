import React, { useContext } from 'react';
import fakeData from '../../fakeData/data.json';
import Ridecost from '../RideCost/Ridecost';
import img from '../../photo/Map.png'
import './SearchResult.css';
import { SimpleMap } from '../GoogleMap/SimpleMap';
const SearchResult = () => {


    return (
        
        <div className="search">
            <div>
            {
                fakeData.map(ride => <Ridecost ride={ride}> </Ridecost>)
            }
            </div>
            <div>
                <SimpleMap></SimpleMap>
            </div>
        </div>
    );
};

export default SearchResult;