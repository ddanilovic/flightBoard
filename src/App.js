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
  const [selected, setSelected] = useState(null);
  const [selectedFlight, setSelectedFlight] = useState(null);

  const showFlights = (e) => {
    // setWorkerId(null)
    setSelected(e)
    setWorkerId(e)
    // setInfo([])
  };
  const showInfo = (e) => {
    setInfo(e) 
    setSelectedFlight(e)
  };

  return (
    <>
      <div className="content-wrapper">
        
        <Workers showFlights={showFlights} setLoading={setLoading} loading={loading} selected={selected} setSelected={setSelected} workers={workers} setWorkers={setWorkers} setFlights={setFlights}/> 

        
        {workerId !== null ? <FlightChart setLoading={setLoading} loading={loading} selectedFlight={selectedFlight} selected={selected} setWorkerId={setWorkerId}setSelected={setSelected} showInfo={showInfo} id={workerId} flights={flights} setFlights={setFlights}/> : null} 
        

        {info.length !== 0 ? <FlightInfo loading={loading} info={info} flights={flights[info]}  /> : null} 

      </div>
    </>
  );
}

export default App;

