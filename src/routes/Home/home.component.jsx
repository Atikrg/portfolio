import Aboutme from "../../components/Aboutme/aboutme.component";
import Contact from "../../components/Contact/contact.component";
import Experience from "../../components/Experience/experience.component";
import Footer from "../../components/Footer/footer.component";
import InfoWork from "../../components/Info/Info.component";
import Loader from "../../components/Loader/loader.component";
import ProjectPreview from "../../components/ProjectCardPreview/project-card-preview.component";
import "./home.component.css"
import React from 'react'


const Home = () => {

  return (
<>
{
  <Loader/> && (
    <div>
    <InfoWork/>
    <Aboutme/>
  <Experience/>
    <ProjectPreview/>
    <Contact/>
   <Footer/>
</div>
  )
}
</>

   
  )
}
export default Home;
