import React, {useEffect} from "react";
import axios from "axios";
import Spinner from "../ui/Spinner";

const Workers = ({showFlights,setLoading,loading,workers,setWorkers,selected}) => {

        useEffect(() => {
          //fetch data when page loads
          const fetchWorkers = async () => {
            const result = await axios('https://interview-mock.herokuapp.com/api/workers');
            setWorkers(result.data);
            showFlights(result.data[0].id) //default selected
            setLoading(false);
          };  
          fetchWorkers()
        },[setWorkers]); // eslint-disable-line
        
    return loading ? ( 
        <Spinner />
        ) : (
        <div className="flights">
          <div className="first-workers"><h4>Workers</h4></div>
          {workers.map((p) => (
            <div className={`name ${p.id === selected ? 'selected' : ''}`} key={p.id} onClick={() => showFlights(p.id)}><h4>{p.name}</h4></div>
          ))}  
        </div>
    )
}

export default Workers
