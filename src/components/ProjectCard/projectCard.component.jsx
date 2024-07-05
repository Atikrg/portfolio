import React from "react";
import moment from "moment";

import {
    CardImage,
    SpecificTitle,
    Title,
    ProjectDescription,
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
                <Source>
                    <span> •</span> <a href={source}>Source</a>
                </Source>
            </DataSource>
        </ProjectComponents>
    );
};

export default ProjectCard;
