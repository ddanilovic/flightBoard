import React from 'react'

const FlightInfo = ({info,loading}) => {
    //p.plane,p.duration,p.from_gate,p.to_gate
    const p = Object.values(info);
    const hours = Math.floor(p[6] / 60);          
    const minutes = p[6] % 60; 
    const duration = `${hours}h ${minutes}min`;
    return loading ? ( 
        null
      ) : (
        <div className="flights-info">
                <div className="info-field first-info">
                    <h4>Plane Number</h4>
                    <h4>Duration</h4>
                    <h4>Origin gate</h4>
                    <h4>Destination gate</h4>
                </div>
                <div className="info-field">
                    <h4>{p[5]}</h4>
                    <h4>{duration}</h4>
                    <h4>{p[7]}</h4>
                    <h4>{p[8]}</h4>
                </div>

        </div>
    )
}

export default FlightInfo
