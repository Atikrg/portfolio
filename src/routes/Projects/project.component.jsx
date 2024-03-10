import React from "react";
import data from "../../assests/data";
import "./project.component.css";
import ProjectCard from "../../components/ProjectCard/projectCard.component";
const Project = (props) => {
  return (
  
  <div>
    <center className="header">Projects</center>
    <div>
    <div className='card-preview'> 
       {
        data.slice(0).reverse().map((item, index)=><ProjectCard key = {item.id} title={item.title} description={item.description.slice(0,90) + "..."} imageUrl= {item.imageUrl}/>)
        }       
      </div>
    </div>
  </div>

  )
};

export default Project;
 