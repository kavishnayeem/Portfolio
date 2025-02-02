import React from "react";
import "./Pcard.css"
export default function Pcard(props){
    return (
        <>
        <div className="outer">
        <div className="card" >
        <h5 className="card-title">{props.name}</h5>
        <img className="card-img-top" src={props.url} alt="Card cap"/>
        <div className="card-body">
        <p class="card-text">{props.description}</p>
        <a href={props.link} class="btn">View Project</a>
        </div>
        </div>
</div>
        </>
    )
}