import React from "react";
import data from "../../assests/data";
import ProjectCard from "../../components/ProjectCard/projectCard.component";
import {
  CardPreview,
  Header,
} from "../../components/ProjectCardPreview/project-card-preview.styles";
const Project = (props) => {
  return (
    <div>
      <Header>Projects</Header>
      <div>
        <CardPreview>
          {data
            .slice(0)
            .reverse()
            .map((item, index) => (
              <ProjectCard
                key={item.id}
                title={item.title}
                description={item.description.slice(0, 90) + "..."}
                imageUrl={item.imageUrl}
              />
            ))}
        </CardPreview>
      </div>
    </div>
  );
};

export default Project;
