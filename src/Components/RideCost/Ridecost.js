import React from 'react';
import './Ridecose.css'

const Ridecost = (props) => {
    const { name, photo, cost, people, id } = props.ride;
    return (
        <div className="ridecost">
            <img src={photo} alt=""/>
            <p>{name}</p>
            <p>{people}</p>
            <p> $ {cost}</p>


        </div>
    );
};

export default Ridecost;