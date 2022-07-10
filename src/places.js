import React from "react"

export default function Places(props) {
    return (
        <div>
            <div className="place-container">
                <div className="p-img">
                    <img src={props.imageUrl}  />
                </div>
                <div className="p-info">
                    <div className="loc">
                    <div className="location">
                        <div className="l-img"></div>
                        <h3>{props.location}</h3>
                        <a href={props.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h1>{props.title}</h1>
                    </div>
                    <div className="desc">
                    <div className="date">
                        <h3 className="start">{props.startDate}</h3>
                         - 
                        <h3 className="end">{props.endDate}</h3>
                    </div>
                    <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}