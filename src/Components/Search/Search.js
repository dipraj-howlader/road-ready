
import React from 'react';
import './Search.css'
import map from "../../photo/Map.png";
import { useHistory } from 'react-router';

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
                        <button type="button" onClick={goToSearchResult}>Search</button>
                    </form>
                </div>
            <div>
                <img src={map} alt=""/>
            </div>
        </div>
    );
};

export default Search;