import React, {useEffect} from "react";
import axios from "axios";

const FlightChart = ({showInfo, id, setLoading,setFlights,flights,loading}) => {
        useEffect(() => {
          setLoading(true);
          const fetchWorkers = async () => {
            const result = await axios(`https://interview-mock.herokuapp.com/api/workers/${id}`);
            setFlights(result.data);
            setLoading(false);
          };  
          fetchWorkers()
        }, [id,setLoading]); // eslint-disable-line



    return loading ? ( 
            null
        ) : (
        
        <div className="flightWrap">
            <div className="flightChart first-info">
                <div className="chartBox"><h4>Flight Num</h4></div>
                <div className="chartBox"><h4>Origin</h4></div>
                <div className="chartBox"><h4>Origin Date</h4></div>
                <div className="chartBox"><h4>Destination</h4></div>
                <div className="chartBox"><h4>Destination Date</h4></div>
            </div>
            {flights.map((p) => (
                <div key={p.num} className="flightChart" onClick={() => {
                    return showInfo([p.plane,p.duration,p.from_gate,p.to_gate])
                }}>
                    <div className="chartBox"><h4>{p.num}</h4></div>
                    <div className="chartBox"><h4>{p.from}</h4></div>
                    <div className="chartBox"><h4>{p.from_date}</h4></div>
                    <div className="chartBox"><h4>{p.to}</h4></div>
                    <div className="chartBox"><h4>{p.to_date}</h4></div>
                </div>
            ))} 
        </div>

    )
}

export default FlightChart
