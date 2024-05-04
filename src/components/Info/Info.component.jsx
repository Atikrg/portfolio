import React, { useState, useRef } from "react";
import "./Info.component.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const InfoWork = (props) => {
    const myInfo = useRef();
    const myName = useRef();
    const mySpeciality = useRef();
    const myCurrentWork = useRef();

  useGSAP(() => {
    gsap.from(myInfo.current, {
      opacity: 0, // Animate to full opacity
      y: 20, // Animate to its original position (y: 0)
      delay: 0.2,
      scale: 1,
      duration: 1,
    });

    gsap.from(myName.current, {
        opacity: 0, // Animate to full opacity
        y: 20, // Animate to its original position (y: 0)
        delay: 0.3,
        scale: 1,
        duration: 1,
      });

      gsap.from(myInfo.current, {
        opacity: 0, // Animate to full opacity
        y: 20, // Animate to its original position (y: 0)
        delay: 0.4,
        scale: 1,
        duration: 1,
      });

      gsap.from(mySpeciality.current, {
        opacity: 0, // Animate to full opacity
        y: 20, // Animate to its original position (y: 0)
        delay: 0.5,
        scale: 1,
        duration: 1,
      });

      gsap.from(myCurrentWork.current, {
        opacity: 0, // Animate to full opacity
        y: 20, // Animate to its original position (y: 0)
        delay: 0.6,
        scale: 1,
        duration: 1,
      });

  });


  return (
    <div className="container-fluid brand-container">
      <div>
        <section className="mask"></section>
      </div>
      <div className="content-info">
        <div className="brand_name">
          <h1 className="brand brand-text text-center text-white" ref={myName}>
            Atik Salim Rangnekar
          </h1>
        </div>
        <div className="speciality sub_info text-white">
          <h1 ref={mySpeciality}>Full Stack Developer and Machine Learner</h1>
          <h3 className="mywork" ref={myCurrentWork}>FreeLancer</h3>
        </div>
      </div>
    </div>
  );
};

export default InfoWork;
