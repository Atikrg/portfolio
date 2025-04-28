import React, { useState, useEffect } from "react";
import { supabase } from "../../config/supabase_client";
import ProjectCard from "../../components/ProjectCard/projectCard.component";
import { CardPreview, Header } from "../../components/ProjectCardPreview/project-card-preview.styles";
import Loader from "../../components/Loader/loader.component";

const Project = (props) => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProjects = async () => {
            const { data, error } = await supabase.from("projects").select();
            if (error) {
                console.log(error);
                setLoading(false);
            }
            if (data) {
                setProjects(data);
                setLoading(false);
            }
        };
        getProjects();
    }, []); // Add empty dependency array to prevent infinite loop

    return (
        <div className="projects-container">
            <Header>Our Projects</Header>
            {loading ? (
                <Loader>Loading Projects...</Loader> // You can show a loader or spinner here
            ) : (
                <CardPreview>
                    {projects
                        .slice()
                        .reverse()
                        .slice(0, 6) // Show only the latest 6 projects
                        .map((item) => (
                            <ProjectCard
                                key={item.id}
                                title={item.title}
                                image={item.image}
                                source={item.source}
                                link={item.link}
                                date={item.date}
                            />
                        ))}
                </CardPreview>
            )}
        </div>
    );
};

export default Project;
