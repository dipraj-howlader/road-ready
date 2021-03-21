import React, { useContext } from 'react';
import Ridecost from '../RideCost/Ridecost';
import './SearchResult.css';
import SimpleMap from '../GoogleMap/SimpleMap';
import { Col, Row } from 'react-bootstrap';
const SearchResult = () => {


    return (

        <div className="search">
            <Row>
                <Col>
                    <div className="des-info">
                        <div className="destination">
                            <h6>Mirpur 1</h6>
                            <p>to</p>
                            <h6>Dhanmondi</h6>
                        </div>
                        <div>
                            <Ridecost></Ridecost>
                        </div>
                    </div>

                </Col>

                <Col>
                    <div className="map">
                        <SimpleMap></SimpleMap>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default SearchResult;