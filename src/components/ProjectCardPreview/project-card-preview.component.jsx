import ProjectCard from '../../components/ProjectCard/projectCard.component'
import React from 'react'
import data from '../../assests/data';
import {CardPreview, ProjectLink, Header} from './project-card-preview.styles.jsx'

const ProjectPreview = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Optional: Adds smooth scrolling behavior
    });
  };

  return (
    <div className='project-preview'>
      <Header>
        Projects
      </Header>

      <CardPreview> 
       {
        data.slice(0, 6).reverse().map((item, index)=><ProjectCard key = {item.id} title={item.title} description={item.description.slice(0,90) + "..."} imageUrl= {item.imageUrl}/>)
        }       
      </CardPreview>
      <br/>
      <br></br>
      
        <ProjectLink to="projects" onClick={scrollToTop}>
          View More
          </ProjectLink>
      
  
    </div>
  )
}

export default ProjectPreview
