import React, { useState } from "react";

import Workers from "./components/workers";
import FlightChart from "./components/flightChart";
import FlightInfo from "./components/flight-info";

function App() {
  const [loading, setLoading] = useState(true); //loading
  const [workerId, setWorkerId] = useState(null); //id of a worker
  const [workers, setWorkers] = useState([]); // list of workers
  const [flights, setFlights] = useState([]); //flight board
  const [info, setInfo] = useState([]); //flight info
  const [selected, setSelected] = useState(null); //selected workert
  const [selectedFlight, setSelectedFlight] = useState(null); //selected flight

  //clicked worker handler
  const showFlights = (e) => {
    setSelected(e);
    setWorkerId(e);
  };
  //clicked flight handler
  const showInfo = (e) => {
    setInfo(e);
    setSelectedFlight(e);
  };

  return (
    <>
      <div className="content-wrapper">
        <Workers
          showFlights={showFlights}
          setLoading={setLoading}
          loading={loading}
          selected={selected}
          workers={workers}
          setWorkers={setWorkers}
        />

        {workerId !== null ? (
          <FlightChart
            setLoading={setLoading}
            loading={loading}
            selectedFlight={selectedFlight}
            showInfo={showInfo}
            id={workerId}
            flights={flights}
            setFlights={setFlights}
          />
        ) : null}

        {info.length !== 0 ? (
          <FlightInfo loading={loading} info={info} />
        ) : null}
      </div>
    </>
  );
}

export default App;
