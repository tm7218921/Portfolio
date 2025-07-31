import React, { useEffect } from "react";
import Header from "./components/Header";
import ProfileSection from "./components/ProfileSection";
import About from "./components/About";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import AcademicActivities from "./components/AcademicActivities";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TechnicalBlog from "./components/TechnicalBlog";
import { Helmet } from "react-helmet";

import "./index.css";
import WorkshopsAndHackathons from "./components/WorkshopsAndHackathons";

function App() {
  useEffect(() => {
    document.title = "Tanmay Mandal - Portfolio";
  }, []);
  return (
    <>

      <Helmet>
        <title>Tanmay Mandal - AI & Data Science Portfolio</title>
        <meta name="description" content="Portfolio of Tanmay Mandal - AI & Data Science Engineer" />
      </Helmet>

      <Header />
      <ProfileSection />
      <About />
      <Skills />
      <WorkExperience />
      <WorkshopsAndHackathons />
      <AcademicActivities />
      <Projects />
      <TechnicalBlog />
      <Contact />
      <Footer />
      
    </>
  );
}

export default App;
