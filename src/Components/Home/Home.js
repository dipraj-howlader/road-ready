import React, { useEffect, useState } from 'react';
import CoreUi from '../CoreUi/CoreUi';
import './Home.css'

const Home = () => {
    const [riders, setRiders] = useState([])
useEffect(() => {
    fetch('https://api.mocki.io/v1/759c6a7e')
    .then(res => res.json())
    .then(data => setRiders(data))
},[])

    return (
        <div className="home">
            {
                riders.map(rider => <CoreUi rider={rider}></CoreUi> )
            }
        </div>
    );
};

export default Home;