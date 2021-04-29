import React, { useState } from "react";

import Workers from "./components/workers"
import FlightChart from "./components/flightChart"
import FlightInfo from "./components/flight-info"

function App() {
  const [loading, setLoading] = useState(true);//set to true
  const [workerId, setWorkerId] = useState(null);
  const [workers, setWorkers] = useState([]);
  const [flights, setFlights] = useState([]);
  const [info, setInfo] = useState([]);

  const showFlights = (e) => {
    // setWorkerId(null)
    setWorkerId(e)
    // setInfo([])
  };
  const showInfo = (e) => {
    setInfo(e)
  };
  setInterval(() => { 
    setWorkerId(workerId)
  }, 60000);

  return (
    <>
      <div className="info-user">
        <h2>Workers</h2>
        <h2>Flights</h2>
        <h2>Flight Date</h2>
      </div>
      <div className="content-wrapper">
        
        <Workers showFlights={showFlights} setLoading={setLoading} loading={loading} workers={workers} setWorkers={setWorkers} setFlights={setFlights}/> 

        
        {workerId !== null ? <FlightChart setLoading={setLoading} loading={loading} showInfo={showInfo} id={workerId} flights={flights} setFlights={setFlights}/> : null} 
        

        {info.length !== 0 ? <FlightInfo loading={loading} info={info} flights={flights[info]}  /> : null} 

      </div>
    </>
  );
}

export default App;

