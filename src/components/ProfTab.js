import React from 'react';
import './new.css';

export default function ProfTab(props) {
    return (
        <div className="container">
        <div className="main">
            <div className="prof">
                <img src={props.avatar} alt="not found"/>
            </div>
            <div className="details">
                <h1>{props.first_name}</h1>
                <p>{props.email}</p>
            </div>
         
        </div>
        </div>
        
    )
}





