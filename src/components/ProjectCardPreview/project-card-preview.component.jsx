import ProjectCard from '../../components/ProjectCard/projectCard.component'
import './project-card-preview.component.css'
import React from 'react'
import card from "../../assests/images/projectcard/im2.jpg";
import { Link } from 'react-router-dom';
import data from '../../assests/data';
const ProjectPreview = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Optional: Adds smooth scrolling behavior
    });
  };

  return (
    <div className='project-preview'>
      <div className="project-header">
        <p>Projects</p>
      </div>

      <div className='card-preview'> 
       {
        data.slice(0, 6).map((item, index)=><ProjectCard key = {item.id} title={item.title} description={item.description.slice(0,90) + "..."} imageUrl= {item.imageUrl}/>)
        }       
      </div>
      <br/>
      <br></br>
      <div>
        <Link className='view_more_projects' to="projects" onClick={scrollToTop}>
         
          View More
          
          </Link>
      </div>
  
    </div>
  )
}

export default ProjectPreview
