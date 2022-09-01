import React from 'react'
import '../css_styles/style.css'

export default function NavBar(props){
    return (
        <div className="nav">
            <img src= {props.image}/>
            <p>{props.title}</p>
        </div>
    )
}