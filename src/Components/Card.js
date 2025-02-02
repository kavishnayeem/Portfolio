import React from "react";
import "./card.css"
export default function Card(props){
    return (
        <>
        <div className="card" >
  <img className="card-img-top" src={props.url} alt="Card cap"/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    
  </div>
</div>
        </>
    )
}