import React from "react";
import data from "../../assests/data";
import ProjectCard from "../../components/ProjectCard/projectCard.component";
import {
    CardPreview,
    Header,
} from "../../components/ProjectCardPreview/project-card-preview.styles";
import { useState, useEffect } from "react";
import { supabase } from "../../config/supabase_client";
const Project = (props) => {
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
    return (
        <div>
            <Header>Projects</Header>
            <div>
                <CardPreview>
                    {projects
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
                        ))}
                </CardPreview>
            </div>
        </div>
    );
};

export default Project;
