import React from "react";
import moment from "moment";
import "./experience.component.css";
import { supabase } from "../../config/supabase_client";
import { Header } from "../ProjectCardPreview/project-card-preview.styles";
import { useState, useEffect } from "react";

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
    });

    return (
        <div className="experience_section">
            <Header id="experiences">Experience</Header>
            <section className="py-5">
                <ul className="timeline">
                {experience.length === 0 ? (
    <p>No experience available</p>
) : (
    experience
        .slice()
        .reverse()
        .map((item, index) => (
            <li key={index} className="timeline-item mb-5">
                <h5 className="fw-bold">{item.title}</h5>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center", // Ensures proper alignment
                    }}
                >
                    <p className="text-muted mb-2 fw-bold">
                        {moment(item.start_date).format("MMMM Do, YYYY")}
                    </p>
                    <p
                        style={{
                            marginLeft: "8px",
                            marginRight: "8px",
                        }}
                    >
                        -
                    </p>
                    <p className="text-muted mb-2 fw-bold">
                        {moment(item.end_date).format("MMMM Do, YYYY")}
                    </p>
                </div>

                <p>Position - {item.position}</p>
                <p className="text-muted">{item.description}</p>
                <p>
                    <i>
                        Skills - <span>{Array.isArray(item.skills) ? item.skills.join(', ') : item.skills}</span>
                    </i>
                </p>
            </li>
        ))
)}

                </ul>
            </section>
        </div>
    );
}
