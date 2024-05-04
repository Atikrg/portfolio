import React from "react";
import "./aboutme.component.css";
import { Header } from "../ProjectCardPreview/project-card-preview.styles";

const Aboutme = () => {
  return (
    <div className="container">
      <Header>Aboutme</Header>
      <div className="aboutme-content">
        <div className="clip-image"></div>
        <div className="writeUp ">
          My name is Atik Salim Rangnekar. I am a Full Stack Web Developer and
          Machine Learning Expert. Currently Studying in Finolex Academy of
          Management And Technology.
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
