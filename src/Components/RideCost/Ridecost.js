import React from 'react';
import './Ridecose.css';
import fakeData from '../../fakeData/data.json';
import { useParams } from 'react-router';
import img from '../../photo/peopleicon.png';

const Ridecost = (props) => {
    const { id } = useParams();
    const { name, photo, cost, people } = fakeData[id - 1];
    const element = ['one', 'two', 'three'];
    return (
        <div className="ridecost">
            {
                element.map(() => (
                    <div className="ride-info">
                        <div className="first-img">
                        <img src={photo} alt="" />
                        </div>
                        <h6>{name}</h6>
                        <div className="snd-img">
                        <img src={img} alt="" />
                        </div>
                        <h6>{people}</h6>
                        <h6>${cost}</h6>
                        <br/>
                    </div>
                ))
            }
        </div>
    );
};

export default Ridecost;