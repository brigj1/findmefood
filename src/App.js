import './App.css';
import Facilities from './components/Facilities';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [facilities, setFacilities] = useState([]);
  useEffect(() => {
    fetch("https://data.sfgov.org/resource/rqzj-sfat.json")
      .then((response) => response.json())
      .then((data) => {
        setFacilities(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="facilities-container">
      <Facilities facilities={facilities}></Facilities>
    </div>
  );
};

export default App;
