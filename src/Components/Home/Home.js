import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import CoreUi from '../CoreUi/CoreUi';
import './Home.css'

const Home = () => {
    // const [riders, setRiders] = useState([])
    const [ridersInfo, setRidersInfo] = useContext(UserContext);

useEffect(() => {
    fetch('https://api.mocki.io/v1/759c6a7e')
    .then(res => res.json())
    .then(data => setRidersInfo(data))
},[])

    return (
        <div className="home">
            {
                ridersInfo.map(rider => <CoreUi rider={rider}></CoreUi> )
            }
        </div>
    );
};

export default Home;