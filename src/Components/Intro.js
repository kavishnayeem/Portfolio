import React from "react"
import "./Intro.css"
import { Outlet,Link} from "react-router-dom"
export default function Intro(){
    document.title="Kavish Nayeem | Explore";
    document.body.style.backgroundColor = "white";
    return (
        <div className="intro ">
           
            <div className="inside container">
                <h1>KAVISH<br/> NAYEEM </h1>
 
                    <h4 className="prof">React Developer</h4>
                    <br/><br/>
                <Link className="Link"  to="/Portfolio"><span className="text">Explore</span></Link>
                </div>
                <Outlet />
        </div>
    );
}