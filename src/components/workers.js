import React, {useEffect} from "react";
import axios from "axios";
import Spinner from "../ui/Spinner";

const Workers = ({showFlights,setLoading,loading,workers,setWorkers,setFlights}) => {

        useEffect(() => {
          //fetch data when page loads
          const fetchWorkers = async () => {
            const result = await axios('https://interview-mock.herokuapp.com/api/workers');
            setWorkers(result.data);
            setLoading(false);
          };  
          fetchWorkers()
        },[setWorkers]); // eslint-disable-line
        
    return loading ? ( 
        <Spinner />
        ) : (
        <div className="flights">
          {workers.map((p) => (
            <div className="name" key={p.id} onClick={() => showFlights(p.id)}><h4>{p.name}</h4></div>
          ))}  
        </div>
    )
}

export default Workers
