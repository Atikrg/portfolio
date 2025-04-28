import React from "react";
import moment from "moment";
import {
    CardImage,
    Title,
    DataSource,
    Source,
    ProjectComponents,
} from "./projectCard.styles";

const ProjectCard = ({ title, image, source, date, view }) => {
    return (
        <ProjectComponents>
            <a href={view} target="_blank" rel="noopener noreferrer">
                <CardImage
                    src={image}
                    alt={`Image for ${title}`}
                    loading="lazy"
                />
            </a>

            <Title>{title}</Title>

            <DataSource>
                <span>{moment(date).format("MMMM Do, YYYY")}</span>
                <Source to={source} target="_blank" rel="noopener noreferrer">
                    <span> •</span> Source
                </Source>
            </DataSource>
        </ProjectComponents>
    );
};

export default ProjectCard;
