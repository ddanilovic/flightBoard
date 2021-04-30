import React, { useEffect } from "react";
import axios from "axios";

const FlightChart = ({
  showInfo,
  id,
  setLoading,
  setFlights,
  flights,
  loading,
  selectedFlight
}) => {
  useEffect(() => {
    setLoading(true);
    const fetchFlights = async () => {
      const result = await axios(
        `https://interview-mock.herokuapp.com/api/workers/${id}`
      );
      setFlights(result.data);
      showInfo(result.data[0]);
      setLoading(false);
    };
    fetchFlights(); //refresh flight board data every minute
    const timer = setInterval(() => {
      setLoading(true);
      fetchFlights();
    }, 60000);
    return () => clearInterval(timer);
  }, [id, setLoading]); // eslint-disable-line

  return loading ? null : (
    <div className="flightWrap">
      <div className="first-flight">
        <div className="first-box">
          <h4>Flight Num</h4>
        </div>
        <div className="first-box">
          <h4>Origin</h4>
        </div>
        <div className="first-box">
          <h4>Origin Date</h4>
        </div>
        <div className="first-box">
          <h4>Destination</h4>
        </div>
        <div className="first-box">
          <h4>Destination Date</h4>
        </div>
      </div>
      <div className="flightData">
        {flights.map((p) => (
          <div
            key={p.num}
            className={`flightChart ${p === selectedFlight ? "selected" : ""}`}
            onClick={() => {
              return showInfo(p);
            }}
          >
            <div className="chartBox">
              <h4 className="info-mark">Flight Num</h4>
              <h4>{p.num}</h4>
            </div>
            <div className="chartBox">
              <h4 className="info-mark">Origin</h4>
              <h4>{p.from}</h4>
            </div>
            <div className="chartBox">
              <h4 className="info-mark">Origin Date</h4>
              <h4>{p.from_date}</h4>
            </div>
            <div className="chartBox">
              <h4 className="info-mark">Destination</h4>
              <h4>{p.to}</h4>
            </div>
            <div className="chartBox">
              <h4 className="info-mark">Destination Date</h4>
              <h4>{p.to_date}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightChart;
