import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [facilities, setFacilities] = useState([]);
  useEffect(() => {
    //fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    fetch("https://data.sfgov.org/resource/rqzj-sfat.json")
    //fetch("https://data.sfgov.org/resource/rqzj-sfat.json_limit=10")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFacilities(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

// address : "5 THE EMBARCADERO"
// applicant : "Ziaurehman Amini"
// block : "0234"
// blocklot : "0234017"
// cnn : "30727000"
// expirationdate : "2016-03-15T00:00:00.000"
// facilitytype : "Push Cart"
// latitude : "37.794331003246846"
// location : {latitude: '37.794331003246846', longitude: '-122.39581105302317', human_address: '{"address": "", "city": "", "state": "", "zip": ""}'}
// locationdescription : "MARKET ST: DRUMM ST intersection"
// longitude : "-122.39581105302317"
// lot : "017"
// objectid : "735318"
// permit : "15MFF-0159"
// priorpermit : "0"
// received : "20151231"
// schedule : "http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=15MFF-0159&ExportPDF=1&Filename=15MFF-0159_schedule.pdf"
// status : "REQUESTED"

  return (
    <div className="facilities-container">
      {/* {facilities.map((facility) => {
        return (
          <div className="facility-card" key={facility.id}>
            <h2 className="facility-title">{facility.title}</h2>
            <p className="facility-body">{facility.body}</p>
            <div className="button">
            <div className="delete-btn">Delete</div>
            </div>
          </div>
        );
      })} */}
    </div>
  );
};

// const App = () => {
//   const [posts, setPosts] = useState([]);
//   useEffect(() => {
//       fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
//       //fetch("https://data.sfgov.org/resource/rqzj-sfat.json")
//          .then((response) => response.json())
//          .then((data) => {
//             console.log(data);
//             setPosts(data);
//          })
//          .catch((err) => {
//             console.log(err.message);
//          });
//   }, []);

export default App;
