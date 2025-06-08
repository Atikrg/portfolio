import React, { useState, useEffect } from "react";
import moment from "moment";
import "./experience.component.css";
import { Header } from "../ProjectCardPreview/project-card-preview.styles";

export default function Experience() {
    const [experience, setExperienceInfo] = useState([]);

    useEffect(() => {
        const dummyData = [
            {
                title: "Frontend Developer",
                position: "React Developer",
                description: "Built responsive UI components with React and improved UX.",
                skills: ["React", "JavaScript", "CSS"],
                start_date: "2021-01-01",
                end_date: "2022-06-30",
            },
            {
                title: "Backend Developer",
                position: "Node.js Developer",
                description: "Created REST APIs and optimized database queries.",
                skills: ["Node.js", "Express", "MongoDB"],
                start_date: "2019-05-01",
                end_date: "2020-12-31",
            },
            {
                title: "Intern",
                position: "Software Engineer Intern",
                description: "Worked on bug fixes and feature development.",
                skills: ["Java", "Spring Boot"],
                start_date: "2018-06-01",
                end_date: "2018-12-31",
            },
        ];

        setExperienceInfo(dummyData);
    }, []);
    return (
        <div className="experience-wrapper" id="experiences">
            <Header>🚀 Experience</Header>

            <div className="timeline-container">
                <div className="timeline">
                    {experience.length === 0 ? (
                        <p>No experience available</p>
                    ) : (
                        experience
                            .slice()
                            .reverse()
                            .map((item, index) => (
                                <div key={index} className="timeline-item">
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-content">
                                        <div className="experience-header">
                                            <h3>{item.title}</h3>
                                            <span className="experience-date">
                                                {moment(item.start_date).format("MMM YYYY")} - {moment(item.end_date).format("MMM YYYY")}
                                            </span>
                                        </div>
                                        <p className="experience-position">Position: {item.position}</p>
                                        <p className="experience-description">{item.description}</p>
                                        <p className="experience-skills">
                                            <i>Skills:</i> <span>{Array.isArray(item.skills) ? item.skills.join(", ") : item.skills}</span>
                                        </p>
                                    </div>
                                </div>
                            ))
                    )}
                </div>
            </div>
        </div>
      
    );
      
}
