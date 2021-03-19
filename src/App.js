import logo from './logo.svg';
import './App.css';
import fakeData from './fakeData/data.json'
import { useEffect, useState } from 'react';
function App() {
  const [rides, setRide] = useState([]);

  useEffect(() => {
    fetch('https://api.mocki.io/v1/fba57c80')
  .then(res => res.json())
  .then(data => setRide(data))
  }, [])

  return (
    <div>
      {
        rides.map(ride => (<div style={{backgroundColor:'blue'}}><p>{ride.name}</p> <img src={ride.photo} alt="img"/> 
        <img src="https://ibb.co/YfHdLHq" alt="img"/>
        
        </div>)
        )
      }
    </div>
  );
}

export default App;
