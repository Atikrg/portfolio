import About from "../../components/Aboutme/aboutme.component";
import Contact from "../../components/Contact/contact.component";
import Experience from "../../components/Experience/experience.component";
import Footer from "../../components/Footer/footer.component";
import InfoWork from "../../components/Info/Info.component";
import Loader from "../../components/Loader/loader.component";
import ProjectPreview from "../../components/ProjectCardPreview/project-card-preview.component";
import "./home.component.css";
import Navbar from "../../components/Navbar/navbar.component";
import React from "react";
import { useEffect } from "react";
import Blogs from "../../components/Blogs/blogs.component";

const Home = () => {
    return (
        <>
            {<Loader /> && (
                <div id="home">
                    <Navbar />
                    <InfoWork />
                    <Blogs/>
                    <About />
                    <Experience />
                    <ProjectPreview />
                    <Contact />
                    <Footer />
                </div>
            )}
        </>
    );
};
export default Home;
