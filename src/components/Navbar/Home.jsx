import React from "react";
import styles from "./homepage.module.css";
import { useState } from "react";
// import LOgo
import MyLogo from './logo2updated.jpg'
// import Components
import AboutComponent from "../About/About";
import ResumeComponent from "../Resume/Resume";
import ProjectsComponent from "../Projects/ProjectsPage";
import SkillsComponent from "../Skills/Skills";
import ContactComponent from "../Contact/Contact";
import MoreAboutComponent from '../MoreAbout/MoreAbout';

// import bootstrap from react/bootstrap
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Home = () => {
  const [activeSection, setActiveSection] = useState("About");

  const handleItemClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div>
      <div className={styles.LayoutPage}>
        <div className={styles.navigationContainer}>
          <div className={styles.navList}>
            <li className={styles.navListItems}>
              <a href="#"> Keerthi
                {/* <img src={MyLogo} alt="LOGO" /> */}
              </a>
            </li>
            <li>
              <a
                href="#About"
                className={activeSection === "About" ? styles.active : ""}
                onClick={() => handleItemClick("About")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#Resume"
                className={activeSection === "Resume" ? styles.active : ""}
                onClick={() => handleItemClick("Resume")}
              >
                RESUME
              </a>
            </li>
            <li>
              <a
                href="#Projects"
                className={activeSection === "Projects" ? styles.active : ""}
                onClick={() => handleItemClick("Projects")}
              >
                PROJECTS
              </a>
            </li>
            <li>
              <a
                href="#Skills"
                className={activeSection === "Skills" ? styles.active : ""}
                onClick={() => handleItemClick("Skills")}
              >
                SKILLS
              </a>
            </li>
            <li>
              <a
                href="#Contact"
                className={activeSection === "Contact" ? styles.active : ""}
                onClick={() => handleItemClick("Contact")}
              >
                CONTACT
              </a>
            </li>
          </div>
        </div>
        <div className={styles.HomePageContainer}>
          <div className={styles.ActiveComponent}>
            <AboutComponent />
            </div>
          <div className={styles.RenderedPageComponent}>
            {/* <div className="" */}
            {activeSection === "About" && <MoreAboutComponent />}
            {activeSection === "Resume" && <ResumeComponent />}
            {activeSection === "Projects" && <ProjectsComponent />}
            {activeSection === "Skills" && <SkillsComponent />}
            {activeSection === "Contact" && <ContactComponent />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
