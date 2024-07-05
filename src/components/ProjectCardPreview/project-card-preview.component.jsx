import ProjectCard from "../../components/ProjectCard/projectCard.component";
import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "../../config/supabase_client.js";
import {
    CardPreview,
    ProjectLink,
    Header,
} from "./project-card-preview.styles.jsx";

const ProjectPreview = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const getProjects = async () => {
            const { data, error } = await supabase.from("projects").select();

            if (error) {
                console.log(error);
            }

            if (data) {
                setProjects(data);
            }
        };
        getProjects();
    });

    console.log(projects);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Optional: Adds smooth scrolling behavior
        });
    };

    return (
        <div className="project-preview">
            <Header>Projects</Header>

            <CardPreview>
                {projects.length === 0 ? (
                    <p>Coming Soon</p>
                ) : (
                    projects
                        .slice()
                        .reverse()
                        .slice(0, 6)
                        .map((item, index) => (
                            <ProjectCard
                                key={item.id}
                                title={item.title}
                                image={item.image}
                                source={item.source}
                                link={item.link}
                                date={item.date}
                            />
                        ))
                )}
            </CardPreview>

            <br />
            <br></br>

            {projects.length > 6 ? (
                <ProjectLink to="projects" onClick={scrollToTop}>
                    View More
                </ProjectLink>
            ) : (
                ""
            )}
        </div>
    );
};

export default ProjectPreview;
