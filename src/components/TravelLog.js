import React from 'react'
import '../css_styles/style.css'

export default function TravelLog(props){

    return (
        <div className ="logs">
            <span className ="mainimage">
                <a href={props.travelJ.ref}><img id ="coverimg"src = {props.travelJ.img} /></a>
            </span>
            <div className = "trio">
                <img id = "loclogo" src ={props.travelJ.locationlogo}/>
                <p id ="loco">{props.travelJ.location}</p>
                <a href={props.travelJ.maplink}>{props.travelJ.maps}</a>
            </div>
            <div className="lower">
                <h1>{props.travelJ.title}</h1>
                <span className = "dating">
                    <p>{props.travelJ.startdate} - {props.travelJ.enddate}</p>
                </span>
                <div className ="desc">
                    <p>{props.travelJ.description}</p>
                </div>
            </div>

        </div>
    )
}