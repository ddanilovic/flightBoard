import React from 'react'

const FlightInfo = ({info,loading}) => {
    const p = info;
    const hours = Math.floor(p[1] / 60);          
    const minutes = p[1] % 60; 
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
                    <h4>{p[0]}</h4>
                    <h4>{duration}</h4>
                    <h4>{p[2]}</h4>
                    <h4>{p[3]}</h4>
                </div>

        </div>
    )
}

export default FlightInfo
