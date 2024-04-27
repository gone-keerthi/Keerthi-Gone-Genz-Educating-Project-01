import React from "react";
import styles from './Layout.module.css';
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import SkillsComponent from '../Skills/Skills';
import ProjectsPage from "../Projects/ProjectsPage";
import Contact from "../Contact/Contact";
import Resume from "../Resume/Resume";
const Layout = () => {
  return (
    <div className={styles.Layout}>
      <div className={styles.navigationComponent}>
        <Navbar />
      </div>
      <div className={styles.layoutContainer}>
        <div className={styles.homeComponent}>
          <About />
        </div>
        <div className={styles.layoutRenderedComponent}>
        {/* <SkillsComponent />  */}
        {/* <ProjectsPage /> */}
        {/* <Contact /> */}
        {/* <Resume /> */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
