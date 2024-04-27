// import React, { useEffect } from 'react';

// //Bootstrap 5 Modules
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import { Tooltip } from 'bootstrap/dist/js/bootstrap.esm.min.js'

// //import icons
// import PersonSharpIcon from '@mui/icons-material/PersonSharp';
// import AssignmentSharpIcon from '@mui/icons-material/AssignmentSharp';
// import WorkSharpIcon from '@mui/icons-material/WorkSharp';
// import PsychologySharpIcon from '@mui/icons-material/PsychologySharp';
// import EmailSharpIcon from '@mui/icons-material/EmailSharp';

// export default function Navbar() {

//  useEffect(() => {

//  //init tooltip
//  Array.from(document.querySelectorAll('button[data-bs-toggle="tooltip"]'))
//  .forEach(tooltipNode => new Tooltip(tooltipNode))
//  });

//   return (
//     <div className="container  p-5 ">
//       <div className = " nav flex-column"
//       style={{width:"70px", backgroundColor:"#2A1B3D"}}
//       >
//       <button type='button' class="btn" data-bs-toggle="tooltip" data-bs-placement="right" title="About">
//         <PersonSharpIcon fontSize='large'  sx={{color:'white'}} />
//       </button>
//       <button type="button" class="btn" data-bs-toggle="tooltip" data-bs-placement="right" title="Resume">
//         <AssignmentSharpIcon fontSize='large'  sx={{color:'white'}} />
//       </button>
//       <button type="button" class="btn" data-bs-toggle="tooltip" data-bs-placement="right" title="Projects">
//         <WorkSharpIcon fontSize='large'  sx={{color:'white'}} />
//       </button>
//       <button type="button" class="btn" data-bs-toggle="tooltip" data-bs-placement="right" title="Skills">
//         <PsychologySharpIcon fontSize='large'  sx={{color:'white'}} />
//       </button>
//       <button type="button" class="btn" data-bs-toggle="tooltip" data-bs-placement="right" title="Contact">
//         <EmailSharpIcon fontSize='large'  sx={{color:'white'}} />
//       </button>
//     </div>
//     </div>
//   );
// }

import React, { Component, useState } from "react";
import "./Navbar.css";
import AboutComponent from "../About/About";
import ResumeComponent from "../Resume/Resume";
import ProjectsComponent from "../Projects/ProjectsPage";
import SkillsComponent from "../Skills/Skills";
import ContactComponent from "../Contact/Contact";
// import About from "../About/About";
// import Resume from "../Resume/Resume";
// import ProjectsPage from "../Projects/ProjectsPage";

const Navbar = () => {
  const [activeComponent, setActiveComponent] = useState();

  const handleItemClick = (e, component) => {
    const list = document.querySelectorAll(".nav-list li");
    list.forEach((li) => li.classList.remove("active"));
    e.currentTarget.parentElement.classList.add("active");
  };

  // const handleItemClick = (component) => {
  //   // if (activeComponent !== component) {
  //   setActiveComponent(component);
  //   // }
  // };

  //  const renderActiveComponent = () => {
  //   switch (activeComponent) {
  //     case "About":
  //       return <AboutComponent />;
  //     case "Resume":
  //       return <ResumeComponent />;
  //     case "Projects":
  //       return <ProjectsComponent />;
  //     case "Skills":
  //       return <SkillsComponent />;
  //     case "Contact":
  //       return <ContactComponent />;
  //     default:
  //       return <AboutComponent />;
  //   }
  // };
  return (
    <div className="navigationPage">
      {/* <div className="navPageBody"> */}
      <nav className="navigation">
        <ul className="nav-list">
          <li className="active">
            <a
              href="#"
              onClick={handleItemClick}
              // onClick={() => {
              //   handleItemClick(<AboutComponent />);
              // }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-circle-user-round"
              >
                <path d="M18 20a6 6 0 0 0-12 0" />
                <circle cx="12" cy="10" r="4" />
                <circle cx="12" cy="12" r="10" />
              </svg>
              About
            </a>
          </li>

          <li className="active">
            <a
              href="#"
              onClick={handleItemClick}
              // onClick={() => {
              //   handleItemClick(<ResumeComponent />);
              // }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-notebook-text"
              >
                <path d="M2 6h4" />
                <path d="M2 10h4" />
                <path d="M2 14h4" />
                <path d="M2 18h4" />
                <rect width="16" height="20" x="4" y="2" rx="2" />
                <path d="M9.5 8h5" />
                <path d="M9.5 12H16" />
                <path d="M9.5 16H14" />
              </svg>
              Resume
            </a>
          </li>
          <li className="active">
            <a
              href="#"
              onClick={handleItemClick}
              // onClick={() => {
              //   handleItemClick(<ProjectsComponent />);
              // }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-briefcase-business"
              >
                <path d="M12 12h.01" />
                <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                <rect width="20" height="14" x="2" y="6" rx="2" />
              </svg>
              Projects
            </a>
          </li>
          <li className="active">
            <a
              href="#"
              onClick={handleItemClick}
              // onClick={() => {
              //   handleItemClick(<SkillsComponent />);
              // }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-brain-cog"
              >
                <path d="M12 5a3 3 0 1 0-5.997.142 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588 4 4 0 0 0 7.636 2.106 3.2 3.2 0 0 0 .164-.546c.028-.13.306-.13.335 0a3.2 3.2 0 0 0 .163.546 4 4 0 0 0 7.636-2.106 4 4 0 0 0 .556-6.588 4 4 0 0 0-2.526-5.77A3 3 0 1 0 12 5" />
                <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
                <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
                <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
                <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
                <path d="M6 18a4 4 0 0 1-1.967-.516" />
                <path d="M19.967 17.484A4 4 0 0 1 18 18" />
                <circle cx="12" cy="12" r="3" />
                <path d="m15.7 10.4-.9.4" />
                <path d="m9.2 13.2-.9.4" />
                <path d="m13.6 15.7-.4-.9" />
                <path d="m10.8 9.2-.4-.9" />
                <path d="m15.7 13.5-.9-.4" />
                <path d="m9.2 10.9-.9-.4" />
                <path d="m10.5 15.7.4-.9" />
                <path d="m13.1 9.2.4-.9" />
              </svg>
              Skills
            </a>
          </li>
          <li className="active">
            <a
              href="#"
              onClick={handleItemClick}
              // onClick={() => {
              //   handleItemClick(<ContactComponent />);
              // }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-mail"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Contact
            </a>
          </li>
          {/* <li className='cta-wrapper'>
            <button className='cta-btn' type='submit'>

            </button>
          </li> */}
          <div className="active-bar"></div>
        </ul>
      </nav>
      {/* <div className="nav-rendered-component">
        <AboutComponent />
        <ResumeComponent />
        <ProjectsComponent />
        <SkillsComponent />
        <ContactComponent />
      </div> */}
    </div>
  );
};

export default Navbar;
