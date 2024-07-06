import React from "react";
import moment from "moment";

import {
    CardImage,
    Title,
    DataSource,
    Source,
    ProjectComponents,
} from "./projectCard.styles";

const ProjectCard = ({ title, image, source, date, link }) => {
    return (
        <ProjectComponents>
            <br />

            <a href={link}>
                <CardImage
                    src={image}
                    alt="Description of the image"
                    loading="lazy"
                />
            </a>

            {/*     <SpecificTitle>
        <p>Specific title</p>
      </SpecificTitle> */}

            <Title>{title}</Title>

            {/* <ProjectDescription>{description}</ProjectDescription> */}

            <DataSource>
                {moment(date).format("MMMM Do, YYYY")}
                <Source to = {source} target="_blank" rel="noopener noreferrer">
                    <span> •</span> Source
                </Source>
            </DataSource>
        </ProjectComponents>
    );
};

export default ProjectCard;
