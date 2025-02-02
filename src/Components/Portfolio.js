import React from "react"
import "./portfolio.css"
import pl from "./pL.js"
import pS from "./pS.js"
import p from "./p.js"
import Card  from "./Card";
import Pcard  from "./Pcard";
import About from "./About";
import NoAbout from "./noAbout";
import Footer from "./Footer";
import Scard from "./Scard"
export default function Portfolio() {
  document.body.style.backgroundColor = "#FFF6EA";
  document.title="Kavish Nayeem | Portfolio";
  const [width,setWidth]=React.useState(window.innerWidth);
   React.useEffect(() => {
    const updateWindowDimensions = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', updateWindowDimensions)
    return () => window.removeEventListener('resize', updateWindowDimensions)
    }, [])
  const languages=pl.map(info=>{
   return( 
          <Card 
          url={info.url}
          
          name={info.name}
      
        />)
  })
  const profSkills=pS.map(inf=>{
    return( 
           <Scard 
           url={inf.url}
           
           name={inf.name}
 
         />)
   })
   const project=p.map(info=>{
    return( 
           <Pcard 
           url={info.url}
           description={info.Description}
           name={info.name}
           link={info.link}
 
         />)
   })
  
   
    return(
       <>
        <nav className="nav">
          <h1>Portfolio</h1>
         </nav>
      <hr />
         { width>=750 ? <About/>: <NoAbout/>}
         <hr className="my-5"/>
        <div className="projects conainter-fluid my-3">
          <h1 >Projects</h1>
          <div className="projectCard container">
            {project}
          </div>
        </div>
        <hr className="my-5"/>


         <div className=" pL container my-2">
           <h1 className="my-4">Programming Languages</h1>
       <section className="section">{languages}</section></div>
       <hr className="my-5"/>
       <div className="container ">
           <h1 className="my-4">Professional Skills</h1>
       <section className="section">{profSkills}</section></div>
      <Footer />
        
       
       
       
       </>
    );
}