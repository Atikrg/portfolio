import React from "react";

import {
  CardImage,
  SpecificTitle,
  Title,
  ProjectDescription,
  DataSource,
  Source,
  ProjectComponents,
  
} from "./projectCard.styles";

const ProjectCard = ({ title, description, imageUrl }) => {
  return (
    <ProjectComponents>
      <br />

      <CardImage src={imageUrl} alt="Description of the image" />

      <SpecificTitle>
        <p>Specific title</p>
      </SpecificTitle>

      <Title>{title}</Title>

      <ProjectDescription>{description}</ProjectDescription>

      <DataSource>
        December 2022
        
        <Source>
        <span> •</span> Source
        </Source>
      </DataSource>
    </ProjectComponents>
  );
};

export default ProjectCard;
