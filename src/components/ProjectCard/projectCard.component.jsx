import "./projectCard.component.css"
import React from 'react'
import { Link } from "react-router-dom"
import card from "../../assests/images/projectcard/im2.jpg";
const ProjectCard = ({title, description, imageUrl}) => {
  return (
    <div className="project-components">
  
  <br/>
      <div className="project-card">
      <img className="card-image"
        src={imageUrl}
        alt="Description of the image"
      />

      </div>
      <div className="specific-title">
          <p>Specific title</p>
      </div>
      <div className="content">
        <div>
          <p className="card-title">
            {title}
            </p>
        </div>
        <div>
          <p className="description">
            {description}
            </p>
        </div>

        <div className="dateSource">
            <p>December 2022</p>
            
            <p className="source"><span>•</span> Source</p>
          
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;
