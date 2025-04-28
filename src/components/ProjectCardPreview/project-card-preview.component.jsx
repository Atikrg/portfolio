import React, { useState, useEffect } from "react";
import ProjectCard from "../../components/ProjectCard/projectCard.component";
import {
    CardPreview,
    ProjectLink,
    Header,
    Container,
    NoProjectsMessage,
    ViewMoreButton,
} from "./project-card-preview.styles.jsx";

const ProjectPreview = () => {
    // Dummy data for projects
    const dummyProjects = [
        {
            id: 1,
            title: "Project One",
            image: "https://res-console.cloudinary.com/ddznxfcap/media_explorer_thumbnails/736fc7412addd3f14314f565f4c9efb6/detailed",
            source: "https://github.com/user/project-one",
            view: "https://res-console.cloudinary.com/ddznxfcap/media_explorer_thumbnails/736fc7412addd3f14314f565f4c9efb6/detailed",
            date: "2025-04-26",
        },
        {
            id: 2,
            title: "Project Two",
            image: "https://res-console.cloudinary.com/ddznxfcap/media_explorer_thumbnails/736fc7412addd3f14314f565f4c9efb6/detailedg",
            source: "https://github.com/user/project-two",
            view: "https://res-console.cloudinary.com/ddznxfcap/media_explorer_thumbnails/736fc7412addd3f14314f565f4c9efb6/detailed",
            date: "2025-04-25",
        },
        {
            id: 3,
            title: "Project Three",
            image: "https://res-console.cloudinary.com/ddznxfcap/media_explorer_thumbnails/736fc7412addd3f14314f565f4c9efb6/detailed",
            source: "https://github.com/user/project-three",
            view: "https://res-console.cloudinary.com/ddznxfcap/media_explorer_thumbnails/736fc7412addd3f14314f565f4c9efb6/detailed",
            date: "2025-04-24",
        },
        {
            id: 4,
            title: "Project Four",
            image: "https://res.cloudinary.com/ddznxfcap/image/upload/v1733639833/cld-sample-5.jpg",
            source: "https://github.com/user/project-four",
            view: "https://example.com/project-four",
            date: "2025-04-23",
        },
        {
            id: 5,
            title: "Project Five",
            image: "https://res.cloudinary.com/ddznxfcap/image/upload/v1733639833/cld-sample-5.jpg",
            source: "https://github.com/user/project-five",
            view: "https://example.com/project-five",
            date: "2025-04-22",
        },
        {
            id: 6,
            title: "Project Six",
            image: "https://res.cloudinary.com/ddznxfcap/image/upload/v1733639833/cld-sample-5.jpg",
            source: "https://github.com/user/project-six",
            view: "https://example.com/project-six",
            date: "2025-04-21",
        },
        {
            id: 7,
            title: "Project Seven",
            image: "https://res.cloudinary.com/ddznxfcap/image/upload/v1733639833/cld-sample-5.jpg",
            source: "https://github.com/user/project-seven",
            view: "https://example.com/project-seven",
            date: "2025-04-20",
        },
    ];

    // State to hold the dummy data
    const [projects, setProjects] = useState(dummyProjects);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Container>
            <Header id="projects">🖥️ My Projects</Header>

            <CardPreview>
                {projects.length === 0 ? (
                    <NoProjectsMessage>Coming Soon!</NoProjectsMessage>
                ) : (
                    projects
                        .slice()
                        .reverse()
                        .slice(0, 6)
                        .map((item) => (
                            <ProjectCard
                                key={item.id}
                                title={item.title}
                                image={item.image}
                                source={item.source}
                                view={item.view}
                                date={item.date}
                            />
                        ))
                )}
            </CardPreview>

            <br />
            <br />

            {projects.length > 6 && (
                <ViewMoreButton to="projects" onClick={scrollToTop}>
                    View More
                </ViewMoreButton>
            )}
        </Container>
    );
};

export default ProjectPreview;
