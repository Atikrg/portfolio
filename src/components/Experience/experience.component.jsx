import React, { useState, useEffect } from "react";
import moment from "moment";
import "./experience.component.css";
import { supabase } from "../../config/supabase_client";
import { Header } from "../ProjectCardPreview/project-card-preview.styles";

export default function Experience() {
    const [experience, setExperienceInfo] = useState([]);

    useEffect(() => {
        const getExperience = async () => {
            const { data, error } = await supabase.from("Experience").select();

            if (error) {
                console.log(error);
            }
            if (data) {
                setExperienceInfo(data);
            }
        };
        getExperience();
    }, []); // Added [] to prevent infinite loop

    return (
        <div className="experience-wrapper" id="experiences">
            <Header>🚀 Experience</Header>

            <div className="experience-container">
                {experience.length === 0 ? (
                    <p>No experience available</p>
                ) : (
                    experience
                        .slice()
                        .reverse()
                        .map((item, index) => (
                            <div key={index} className="experience-card">
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
                        ))
                )}
            </div>
        </div>
    );
}
