import { Link } from "react-router-dom"
import "./About.css"
import logo from "./me.jpeg"
export default function About(){
    function click(){
        alert("This Feature is not Available yet")
    }
    return(
        <>
            <div className="row">
                <div className=" first col-6">
                    <div className=" about container my-5">
                        <p className="hello">Hello I am,</p>
                        <h1>Kavish Nayeem</h1>
                        <div className="information">
                          <p className=""> A passionate Software Engineer with expertise in Full Stack Development, Machine Learning, and Cloud Computing. Currently pursuing my Master’s in Computer Science at Texas A&M University, I thrive on building scalable, efficient, and innovative solutions that bridge the gap between technology and real-world applications.</p>
                          <p className="my-5">
                          With hands-on experience in MERN stack, .NET Core, AWS, and AI/ML frameworks, I have developed projects ranging from AI-driven customer support chatbots to hackathon-winning automation tools like JiraBotOps. My research in Prompt Engineering and Secure AI Execution Environments has further deepened my understanding of cutting-edge technologies.

I'm always looking for opportunities to collaborate on impactful projects. Let’s connect and build something incredible together!</p>
                        </div>
                        <Link className="Link" onClick={click} to="/portfolio"><span className="text">Learn More</span></Link>
                    </div>
                </div>
                <div className="second col-6 ">
                    <img className="photo" src={logo} alt="me"/>
                </div>

            </div>
        
        </>
    )
}