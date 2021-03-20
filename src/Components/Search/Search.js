
import React from 'react';
import './Search.css'
import map from "../../photo/Map.png";
import { useHistory } from 'react-router';
import googleMapReact from 'google-map-react';
import SimpleMap from '../GoogleMap/SimpleMap';

const Search = () => {
    const history = useHistory();
    const goToSearchResult = () => {
        history.push("/result");
    }
    return (
        <div className="search">
                <div class="contact-us">
                    <form>
                        <input placeholder="From" required="" type="text" />
                        <input name="customerEmail" placeholder="To" type="text" />
                        <input type="date" name="date" id=""/>
                        <button type="button" onClick={goToSearchResult}>Search</button>
                    </form>
                </div>
            <div>
                <SimpleMap style={{border:'1px solid red',width:'10px'}}></SimpleMap>
            </div>
        </div>
    );
};

export default Search;