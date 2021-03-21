
import React from 'react';
import './Search.css';
import { useHistory, useParams } from 'react-router';
import SimpleMap from '../GoogleMap/SimpleMap';
import { Col, Row } from 'react-bootstrap';


const Search = () => {


    const { id } = useParams();
    console.log(id);
    const history = useHistory();
    const goToSearchResult = () => {
        history.push(`/result/${id}`);
    }
    return (
        <div className="search">


            <Row>
                <Col>
                <div className="contact-us">
                    <form>
                        <input placeholder="From" required="" type="text" />
                        <input name="customerEmail" placeholder="To" type="text" />
                        <input type="date" name="date" id="" />
                        <button type="button" onClick={goToSearchResult}>Search</button>
                    </form>
                </div></Col>
                <Col>
                <div className="map">
                   <SimpleMap ></SimpleMap> 
                </div>
                    
                </Col>
            </Row>
        </div>
    );
};

export default Search;