import React, { useEffect, useState } from 'react';
import CoreUi from '../CoreUi/CoreUi';
import './Home.css'
import img1 from '../../photo/Frame.png';
import img2 from '../../photo/Frame-1.png';
import img3 from '../../photo/Frame-2.png';
import img4 from '../../photo/Frame-3.png';

const Home = () => {
    const roadReady = [
        {
            name: "Motor",
            photo :img1,
            id:'1'
        },
        {
            name: "Bus",
            photo :img2,
            id:'2'
        },
        {
            name: "Car",
            photo :img3,
            id:'3'
        },
        {
            name: "Train",
            photo :img4,
            id:'4'
        }
    ]

    // const [riders, setRiders] = useState([])
// useEffect(() => {
//     fetch('https://api.mocki.io/v1/759c6a7e')
//     .then(res => res.json())
//     .then(data => setRiders(data))
// },[])

    return (
        <div className="home">
            {
                roadReady?.map(rider => <CoreUi rider={rider}></CoreUi> )
            }
        </div>
    );
};

export default Home;