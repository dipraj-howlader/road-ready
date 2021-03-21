import React from 'react';
import './Ridecose.css';
import fakeData from '../../fakeData/data.json';
import { useParams } from 'react-router';

const Ridecost = (props) => {
    const {id } =useParams();
    const { name, photo, cost, people } = fakeData[id-1]
    return (
        <div className="ridecost">
            <h6>{name}</h6>
        </div>
    );
};

export default Ridecost;