import React, { useState, useEffect } from "react";
import "./aboutme.styles.css";
import { Header } from "../ProjectCardPreview/project-card-preview.styles";

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
                    <h2>Hello! 👋</h2>
                    <p>
                        I am a passionate software developer specializing in Android and Web applications.
                        I bring enthusiasm to every project and a strong dedication to competitive programming.
                        My mission is to help clients grow their businesses through efficient, scalable software solutions. 🚀
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
