import React, { useState, useEffect } from "react";
import "./aboutme.styles.css";
import { Header } from "../ProjectCardPreview/project-card-preview.styles";
import AboutData from "../../assests/json_files/about.json";

function About() {
    const [aboutInfo, setAboutInfo] = useState({});



    return (
        <div className="about-wrapper" id="about">
            <Header>👋 About Me</Header>

            <div className="about-container">
                {/* If you want to use image later */}
                {/* <div className="about-image">
          <img
            src={aboutInfo.image}
            alt="Profile"
            loading="lazy"
          />
        </div> */}

                <div className="about-description">
                    <h2>{AboutData[0].greeting}</h2>
                    <p>
                        {
                            AboutData[0].aboutme
                     }
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
