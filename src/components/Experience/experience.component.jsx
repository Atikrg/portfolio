import React, { useState, useEffect } from "react";
import moment from "moment";
import "./experience.component.css";
import { Header } from "../ProjectCardPreview/project-card-preview.styles";
import experienceData from "../../assests/json_files/experience.json";
export default function Experience() {
    const [experience, setExperienceInfo] = useState([]);

    useEffect(() => {
   
        setExperienceInfo(experienceData);


        console.log("experience data is", experienceData);
    }, []);
    return (
        <div className="experience-wrapper" id="experiences">
            <Header>🚀 Experience</Header>

            <div className="timeline-container">
                <div className="timeline">
                    {experience.length === 0 ? (
                        <p>No experience available</p>
                    ) : (
                        experience[0]
                            .slice()
                            .map((item, index) => (
                                <div key={index} className="timeline-item">
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-content">
                                        <div className="experience-header">
                                            <h3>{item.title}</h3>
                                            <span className="experience-date">
                                                {moment(item.start_date).format("MMM YYYY")} -{" "}
                                                {moment(item.end_date).format("MMM YYYY")}
                                            </span>
                                        </div>
                                        <p className="experience-position">
                                            Position: {item.position}
                                        </p>
                                        <p className="experience-description">{item.description}</p>
                                        <p className="experience-skills">
                                            <i>Skills:</i>{" "}
                                            <span>
                                                {Array.isArray(item.skills)
                                                    ? item.skills.join(", ")
                                                    : item.skills}
                                            </span>
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
