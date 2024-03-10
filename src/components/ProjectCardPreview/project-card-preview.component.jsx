import ProjectCard from '../../components/ProjectCard/projectCard.component'
import React from 'react'
import card from "../../assests/images/projectcard/im2.jpg";
import { Link } from 'react-router-dom';
import data from '../../assests/data';
import {CardPreview, ProjectLink} from './project-card-preview.styles.jsx'

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

      <CardPreview> 
       {
        data.slice(0, 6).reverse().map((item, index)=><ProjectCard key = {item.id} title={item.title} description={item.description.slice(0,90) + "..."} imageUrl= {item.imageUrl}/>)
        }       
      </CardPreview>
      <br/>
      <br></br>
      <div>
        <ProjectLink className='view_more_projects' to="projects" onClick={scrollToTop}>
          View More
          </ProjectLink>
      </div>
  
    </div>
  )
}

export default ProjectPreview
