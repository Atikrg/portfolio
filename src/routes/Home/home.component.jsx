import Aboutme from "../../components/Aboutme/aboutme.component";
import Contact from "../../components/Contact/contact.component";
import Experience from "../../components/Experience/experience.component";
import InfoWork from "../../components/Info/Info.component";
import Navbar from "../../components/Navbar/navbar.component";
import ProjectPreview from "../../components/ProjectCardPreview/project-card-preview.component";
import "./home.component.css"
import React from 'react'


const Home = () => {

  return (
    <div>
      <Navbar/>
        <InfoWork/>
      <Experience/>
        <Aboutme/>
        <ProjectPreview/>
        <Contact/>
       
    </div>
  )
}
export default Home;
