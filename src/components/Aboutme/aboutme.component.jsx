import React from "react";
import "./aboutme.styles.css";
import { Header } from "../ProjectCardPreview/project-card-preview.styles";
import profile from "../../assests/images/atik.jpeg";
import { supabase } from "../../config/supabase_client";
import { useState, useEffect } from "react";
function About() {
    const [aboutInfo, setAboutInfo] = useState({});

    useEffect(() => {
        const getAbout = async () => {
            const { data, error } = await supabase.from("about").select();

            if (error) {
                console.log(error);
            }

            if (data) {
                setAboutInfo(...data);
            }
        };
        getAbout();
    });

    return (
        <div className="container" style={{ marginTop: "24px" }} id="about">
            <Header>Aboutme</Header>
            <center className="aboutme-content">
                <div className="right">
                    <img
                        alt="profile_photo"
                        className="nji"
                        src={aboutInfo.image}
                        loading="lazy"
                    />
                </div>
                <div className="description">
                    {aboutInfo.description}
                    <br></br>
                </div>
            </center>
        </div>
    );
}

export default About;
