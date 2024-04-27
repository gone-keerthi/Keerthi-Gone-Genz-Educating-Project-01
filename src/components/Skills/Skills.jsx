import { useContext } from "react";
// import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

import Accordion from "react-bootstrap/Accordion";
import AccordionContext from "react-bootstrap/AccordionContext";
import { useAccordionButton } from "react-bootstrap/AccordionButton";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styles from "./skills.module.css";

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { PanelsRightBottom } from "lucide-react";

const PINK = "rgb(245,143,124)";
const BLUE = "rgba(0, 0, 255, 0.6)";
const BG = "rgb(216,63,135)";
const PathColor = "rgb(245,143,124)";
// const BLUE = "2a1b3d"
// const PINK = "d83f87"
// function ContextAwareToggle({ children, eventKey, callback }) {
//   const { activeEventKey } = useContext(AccordionContext);

//   const decoratedOnClick = useAccordionButton(
//     eventKey,
//     () => callback && callback(eventKey)
//   );

//   const isCurrentEventKey = activeEventKey === eventKey;

//   return (
//     <button
//       type="button"
//       style={{
//         backgroundColor: isCurrentEventKey ? PathColor : BG,
//         width: "200px",
//         // padding: "0.5rem 1rem", // Adjust padding as needed
//         fontSize: "0.9rem", // Adjust font-size as needed
//         height: "auto",
//         borderRadius: "20px",
//         color: "white",
//         // color:"black",
//         border: "none",
//         // alignContent: "center",
//         // justifyContent: "center",
//         alignItems: "center",
//         cursor: "pointer",
//         transition: "background-color 0.3s ease", // Smooth transition for color change
//         // Hover effect
//         ":hover": {
//           backgroundColor: "rgb(245,143,124)",
//         },
//       }}
//       onClick={decoratedOnClick}
//     >
//       {children}
//     </button>
//   );
// }

function Example() {
  return (
    <div div className={styles.skillCardContainer}>
      {/* -------------------------------------------------------- */}
      <Accordion defaultActiveKey="0" flush className={styles.skillsCardComponent}>

        <div className={styles.programmingLanguagesContainer} >
          <Accordion defaultActiveKey="0">
          <Accordion.Item  className={styles.accordionItem} eventKey="0">
            <Accordion.Header className={styles.AccordionHeader} >
              Programming Languages
            </Accordion.Header>

            <Accordion.Body
              style={{
                backgroundImage: "linear-gradient(135deg,#2A1B3D, #ac9af5 )",
              }}
              // #9ccd7e, #5ca7db
            >
              <div className={styles.programmingLanguagesCard}>
                <div className={styles.Languages}>
                  <div style={{ width: 70, height: 70 }}>
                    <CircularProgressbarWithChildren
                      value={70}
                      styles={buildStyles({
                        pathColor: "#65a7d3",
                      })}
                    >
                      <svg
                        className={styles.icons}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="100"
                        height="100"
                        viewBox="0 0 48 48"
                      >
                        <linearGradient
                          id="SNASnMitCxQrIYk4GDibta_v8RpPQUwv0N8_gr1"
                          x1="18.208"
                          x2="34.159"
                          y1="2.413"
                          y2="46.236"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stop-color="#f09701"></stop>
                          <stop offset="1" stop-color="#e36001"></stop>
                        </linearGradient>
                        <path
                          fill="url(#SNASnMitCxQrIYk4GDibta_v8RpPQUwv0N8_gr1)"
                          d="M7.192,7.176l2.627,29.77c0.109,1.237,0.97,2.28,2.164,2.621l10.643,3.041	c0.898,0.257,1.849,0.257,2.747,0l10.643-3.041c1.194-0.341,2.055-1.383,2.164-2.621l2.627-29.77C40.911,6.006,39.99,5,38.816,5	H9.184C8.01,5,7.089,6.006,7.192,7.176z"
                        ></path>
                        <path
                          fill="#f09601"
                          d="M24,8v31.9l9.876-2.822c0.797-0.228,1.371-0.924,1.443-1.749l2.286-26.242	C37.656,8.502,37.196,8,36.609,8H24z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5L24,25z M32.9,17l0.3-4H24v4H32.9z"
                        ></path>
                        <path
                          fill="#d6e0e9"
                          d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
                        ></path>
                        <path
                          d="M33.2,13l-0.3,4H24h-4.9l0.3,4H24h8.6l-0.7,11.5L24,35.1l-7.9-2.6L15.7,27h4l0.2,2.5l4.1,1.4l4.1-1.4l0.3-4.5H24h-8.4 l-0.7-12H24H33.2 M34.278,12H33.2H24h-9.1h-1.06l0.062,1.058l0.7,12L14.657,26h-0.032l0.078,1.073l0.4,5.5l0.049,0.668 l0.636,0.209l7.9,2.6L24,36.153l0.313-0.103l7.9-2.6l0.644-0.212l0.041-0.677l0.7-11.5L33.663,20H32.6H24h-3.672l-0.15-2H24h8.9 h0.928l0.069-0.925l0.3-4L34.278,12L34.278,12z M20.623,26H24h3.331l-0.185,2.769L24,29.843l-3.156-1.077l-0.148-1.846L20.623,26 L20.623,26z"
                          opacity=".05"
                        ></path>
                        <path
                          d="M33.2,13l-0.3,4H24h-4.9l0.3,4H24h8.6l-0.7,11.5L24,35.1l-7.9-2.6L15.7,27h4l0.2,2.5l4.1,1.4l4.1-1.4l0.3-4.5H24h-8.4 l-0.7-12H24H33.2 M33.739,12.5H33.2H24h-9.1h-0.53l0.031,0.529l0.7,12l0.027,0.471H15.6H24h3.866l-0.242,3.634L24,30.372 l-3.628-1.239l-0.174-2.173l-0.037-0.46H19.7h-4h-0.538l0.039,0.536l0.4,5.5l0.024,0.334l0.318,0.105l7.9,2.6L24,35.626 l0.156-0.051l7.9-2.6l0.322-0.106l0.021-0.339l0.7-11.5l0.032-0.53H32.6H24h-4.136l-0.225-3H24h8.9h0.464l0.035-0.463l0.3-4 L33.739,12.5L33.739,12.5z"
                          opacity=".07"
                        ></path>
                      </svg>
                    </CircularProgressbarWithChildren>
                  </div>
                  <button className={styles.button}>C</button>
                  <p className={styles.p}>
                    C is a general-purpose programming language
                  </p>
                </div>

                <div className={styles.Languages}>
                  <div style={{ width: 70, height: 70 }}>
                    <CircularProgressbarWithChildren value={80} 
                    styles={buildStyles({
                      pathColor: "#65a7d3",
                    })}>
                      <svg
                        className={styles.icons}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="100"
                        height="100"
                        viewBox="0 0 48 48"
                      >
                        <linearGradient
                          id="Ey3AfYdg0JtJGx7I73Eu7a_TpULddJc4gTh_gr1"
                          x1="5"
                          x2="43"
                          y1="24"
                          y2="24"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset=".002" stop-color="#427fdb"></stop>
                          <stop offset=".397" stop-color="#2668cb"></stop>
                          <stop offset=".763" stop-color="#1358bf"></stop>
                          <stop offset="1" stop-color="#0c52bb"></stop>
                        </linearGradient>
                        <path
                          fill="url(#Ey3AfYdg0JtJGx7I73Eu7a_TpULddJc4gTh_gr1)"
                          fill-rule="evenodd"
                          d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0	c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867	c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0	c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867	c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z"
                          clip-rule="evenodd"
                        ></path>
                        <linearGradient
                          id="Ey3AfYdg0JtJGx7I73Eu7b_TpULddJc4gTh_gr2"
                          x1="5"
                          x2="42.487"
                          y1="18.702"
                          y2="18.702"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stop-color="#32bdef"></stop>
                          <stop offset="1" stop-color="#1ea2e4"></stop>
                        </linearGradient>
                        <path
                          fill="url(#Ey3AfYdg0JtJGx7I73Eu7b_TpULddJc4gTh_gr2)"
                          fill-rule="evenodd"
                          d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836	c3.343-1.872,13.405-7.507,16.748-9.38c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331	c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z"
                          clip-rule="evenodd"
                        ></path>
                        <path
                          fill="#fff"
                          fill-rule="evenodd"
                          d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14s-14-6.273-14-14	S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z"
                          clip-rule="evenodd"
                        ></path>
                        <linearGradient
                          id="Ey3AfYdg0JtJGx7I73Eu7c_TpULddJc4gTh_gr3"
                          x1="23.593"
                          x2="43"
                          y1="23.852"
                          y2="23.852"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stop-color="#2aa4f4"></stop>
                          <stop offset="1" stop-color="#007ad9"></stop>
                        </linearGradient>
                        <path
                          fill="url(#Ey3AfYdg0JtJGx7I73Eu7c_TpULddJc4gTh_gr3)"
                          fill-rule="evenodd"
                          d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127	L23.593,24L42.485,13.205z"
                          clip-rule="evenodd"
                        ></path>
                        <g opacity=".05">
                          <path d="M33,21v2h2v2h-2v2h-2v-2h-2v-2h2v-2H33 M34,20h-1h-2h-1v1v1h-1h-1v1v2v1h1h1v1v1h1h2h1v-1v-1h1h1v-1v-2v-1h-1h-1v-1V20 L34,20z"></path>
                          <path d="M40,21v2h2v2h-2v2h-2v-2h-2v-2h2v-2H40 M41,20h-1h-2h-1v1v1h-1h-1v1v2v1h1h1v1v1h1h2h1v-1v-1h1h1v-1v-2v-1h-1h-1v-1V20 L41,20z"></path>
                        </g>
                        <g opacity=".07">
                          <path d="M33,21v2h2v2h-2v2h-2v-2h-2v-2h2v-2H33 M33.5,20.5H33h-2h-0.5V21v1.5H29h-0.5V23v2v0.5H29h1.5V27v0.5H31h2h0.5V27v-1.5H35 h0.5V25v-2v-0.5H35h-1.5V21V20.5L33.5,20.5z"></path>
                          <path d="M40,21v2h2v2h-2v2h-2v-2h-2v-2h2v-2H40 M40.5,20.5H40h-2h-0.5V21v1.5H36h-0.5V23v2v0.5H36h1.5V27v0.5H38h2h0.5V27v-1.5H42 h0.5V25v-2v-0.5H42h-1.5V21V20.5L40.5,20.5z"></path>
                        </g>
                        <polygon
                          fill="#fff"
                          points="33,21 31,21 31,23 29,23 29,25 31,25 31,27 33,27 33,25 35,25 35,23 33,23"
                        ></polygon>
                        <polygon
                          fill="#fff"
                          points="42,23 40,23 40,21 38,21 38,23 36,23 36,25 38,25 38,27 40,27 40,25 42,25"
                        ></polygon>
                        <g>
                          <path
                            d="M24,10c5.128,0,9.602,2.771,12.041,6.887l-6.073,3.47C28.737,18.347,26.527,17,24,17c-3.864,0-7,3.136-7,7 c0,3.863,3.137,7,7,7c2.57,0,4.812-1.392,6.029-3.459l6.132,3.374C33.75,35.142,29.21,38,24,38c-7.727,0-14-6.273-14-14 S16.273,10,24,10 M24,9C15.729,9,9,15.729,9,24s6.729,15,15,15c5.367,0,10.36-2.908,13.03-7.59l0.503-0.882l-0.89-0.49 l-6.132-3.374l-0.851-0.468l-0.493,0.837C28.09,28.863,26.11,30,24,30c-3.308,0-6-2.692-6-6s2.692-6,6-6 c2.099,0,4.011,1.076,5.115,2.879l0.507,0.828l0.842-0.481l6.073-3.47l0.882-0.504l-0.518-0.874C34.205,11.827,29.262,9,24,9L24,9 z"
                            opacity=".05"
                          ></path>
                          <path
                            d="M24,10c5.128,0,9.602,2.771,12.041,6.887l-6.073,3.47C28.737,18.347,26.527,17,24,17c-3.864,0-7,3.136-7,7 c0,3.863,3.137,7,7,7c2.57,0,4.812-1.392,6.029-3.459l6.132,3.374C33.75,35.142,29.21,38,24,38c-7.727,0-14-6.273-14-14 S16.273,10,24,10 M24,9.5C16.005,9.5,9.5,16.005,9.5,24S16.005,38.5,24,38.5c5.188,0,10.014-2.812,12.595-7.337l0.252-0.441 l-0.445-0.245l-6.132-3.374l-0.425-0.234l-0.246,0.418C28.431,29.269,26.286,30.5,24,30.5c-3.584,0-6.5-2.916-6.5-6.5 s2.916-6.5,6.5-6.5c2.275,0,4.346,1.166,5.542,3.118l0.253,0.414l0.421-0.241l6.073-3.47l0.441-0.252l-0.259-0.437 C33.864,12.233,29.086,9.5,24,9.5L24,9.5z"
                            opacity=".07"
                          ></path>
                        </g>
                      </svg>
                    </CircularProgressbarWithChildren>
                  </div>
                  <button className={styles.button}>C++</button>
                  <p className={styles.p}>
                    C++ is a cross-platform language
                    {/* that can be used to create high-performance applications */}
                  </p>
                </div>
                <div className={styles.Languages}>
                  <div style={{ width: 70, height: 70 }}>
                    <CircularProgressbarWithChildren value={66}
                    styles={buildStyles({
                      pathColor: "#65a7d3",
                    })}>
                      <svg
                        className={styles.icons}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="100"
                        height="100"
                        viewBox="0 0 48 48"
                      >
                        <linearGradient
                          id="goqfu1ZNmEnUrQDJEQ1bUa_l75OEUJkPAk4_gr1"
                          x1="10.458"
                          x2="26.314"
                          y1="12.972"
                          y2="26.277"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stop-color="#26abe7"></stop>
                          <stop offset="1" stop-color="#086dbf"></stop>
                        </linearGradient>
                        <path
                          fill="url(#goqfu1ZNmEnUrQDJEQ1bUa_l75OEUJkPAk4_gr1)"
                          d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2 H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104 c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672 C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498 c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"
                        ></path>
                        <linearGradient
                          id="goqfu1ZNmEnUrQDJEQ1bUb_l75OEUJkPAk4_gr2"
                          x1="35.334"
                          x2="23.517"
                          y1="37.911"
                          y2="21.034"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stop-color="#feb705"></stop>
                          <stop offset="1" stop-color="#ffda1c"></stop>
                        </linearGradient>
                        <path
                          fill="url(#goqfu1ZNmEnUrQDJEQ1bUb_l75OEUJkPAk4_gr2)"
                          d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2 h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104 c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672 C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498 c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"
                        ></path>
                      </svg>
                    </CircularProgressbarWithChildren>
                  </div>
                  <button className={styles.button}>Python</button>
                  <p className={styles.p}>
                    used on a server to create web applications
                  </p>
                </div>
                <div className={styles.Languages}>
                  <div style={{ width: 70, height: 70 }}>
                    <CircularProgressbarWithChildren value={90} 
                    styles={buildStyles({
                      pathColor: "#65a7d3",
                    })}>
                      <svg
                        className={styles.icons}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="100"
                        height="100"
                        viewBox="0 0 48 48"
                      >
                        <path fill="#f7df1e" d="M6,42V6h36v36H6z"></path>
                        <path
                          fill="#000001"
                          d="M29.538,32.947c0.692,1.124,1.444,2.201,3.037,2.201c1.338,0,2.04-0.665,2.04-1.585 c0-1.101-0.726-1.492-2.198-2.133l-0.807-0.344c-2.329-0.988-3.878-2.226-3.878-4.841c0-2.41,1.845-4.244,4.728-4.244 c2.053,0,3.528,0.711,4.592,2.573l-2.514,1.607c-0.553-0.988-1.151-1.377-2.078-1.377c-0.946,0-1.545,0.597-1.545,1.377 c0,0.964,0.6,1.354,1.985,1.951l0.807,0.344C36.452,29.645,38,30.839,38,33.523C38,36.415,35.716,38,32.65,38 c-2.999,0-4.702-1.505-5.65-3.368L29.538,32.947z M17.952,33.029c0.506,0.906,1.275,1.603,2.381,1.603 c1.058,0,1.667-0.418,1.667-2.043V22h3.333v11.101c0,3.367-1.953,4.899-4.805,4.899c-2.577,0-4.437-1.746-5.195-3.368 L17.952,33.029z"
                        ></path>
                      </svg>
                    </CircularProgressbarWithChildren>
                  </div>
                  <button className={styles.button}>Javascript</button>
                  <p className={styles.p}>
                    used for web development, both on the client and server
                    side. As a scripting language
                  </p>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          </Accordion>
        </div>

        <div className={styles.webDevelopmentContainer}>
          <Accordion.Item eventKey="1">
            <Accordion.Header className={styles.AccordionHeader}>Web Development</Accordion.Header>
            <Accordion.Body
             style={{
              backgroundImage: "linear-gradient(135deg,#2A1B3D, #ac9af5 )",
            }}
            >
              <div className={styles.webDevelopmentCard}>
                <div className={styles.webDevelopmentCardContent}>
                  <div style={{ width: 70, height: 70 }}>
                    <CircularProgressbarWithChildren value={90} 
                   styles={buildStyles({
                    pathColor: "#65a7d3",
                  })}>
                      <svg
                        className={styles.icons}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="100"
                        height="100"
                        viewBox="0 0 48 48"
                      >
                        <linearGradient
                          id="SNASnMitCxQrIYk4GDibta_v8RpPQUwv0N8_gr1"
                          x1="18.208"
                          x2="34.159"
                          y1="2.413"
                          y2="46.236"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stop-color="#f09701"></stop>
                          <stop offset="1" stop-color="#e36001"></stop>
                        </linearGradient>
                        <path
                          fill="url(#SNASnMitCxQrIYk4GDibta_v8RpPQUwv0N8_gr1)"
                          d="M7.192,7.176l2.627,29.77c0.109,1.237,0.97,2.28,2.164,2.621l10.643,3.041	c0.898,0.257,1.849,0.257,2.747,0l10.643-3.041c1.194-0.341,2.055-1.383,2.164-2.621l2.627-29.77C40.911,6.006,39.99,5,38.816,5	H9.184C8.01,5,7.089,6.006,7.192,7.176z"
                        ></path>
                        <path
                          fill="#f09601"
                          d="M24,8v31.9l9.876-2.822c0.797-0.228,1.371-0.924,1.443-1.749l2.286-26.242	C37.656,8.502,37.196,8,36.609,8H24z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5L24,25z M32.9,17l0.3-4H24v4H32.9z"
                        ></path>
                        <path
                          fill="#d6e0e9"
                          d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
                        ></path>
                        <path
                          d="M33.2,13l-0.3,4H24h-4.9l0.3,4H24h8.6l-0.7,11.5L24,35.1l-7.9-2.6L15.7,27h4l0.2,2.5l4.1,1.4l4.1-1.4l0.3-4.5H24h-8.4 l-0.7-12H24H33.2 M34.278,12H33.2H24h-9.1h-1.06l0.062,1.058l0.7,12L14.657,26h-0.032l0.078,1.073l0.4,5.5l0.049,0.668 l0.636,0.209l7.9,2.6L24,36.153l0.313-0.103l7.9-2.6l0.644-0.212l0.041-0.677l0.7-11.5L33.663,20H32.6H24h-3.672l-0.15-2H24h8.9 h0.928l0.069-0.925l0.3-4L34.278,12L34.278,12z M20.623,26H24h3.331l-0.185,2.769L24,29.843l-3.156-1.077l-0.148-1.846L20.623,26 L20.623,26z"
                          opacity=".05"
                        ></path>
                        <path
                          d="M33.2,13l-0.3,4H24h-4.9l0.3,4H24h8.6l-0.7,11.5L24,35.1l-7.9-2.6L15.7,27h4l0.2,2.5l4.1,1.4l4.1-1.4l0.3-4.5H24h-8.4 l-0.7-12H24H33.2 M33.739,12.5H33.2H24h-9.1h-0.53l0.031,0.529l0.7,12l0.027,0.471H15.6H24h3.866l-0.242,3.634L24,30.372 l-3.628-1.239l-0.174-2.173l-0.037-0.46H19.7h-4h-0.538l0.039,0.536l0.4,5.5l0.024,0.334l0.318,0.105l7.9,2.6L24,35.626 l0.156-0.051l7.9-2.6l0.322-0.106l0.021-0.339l0.7-11.5l0.032-0.53H32.6H24h-4.136l-0.225-3H24h8.9h0.464l0.035-0.463l0.3-4 L33.739,12.5L33.739,12.5z"
                          opacity=".07"
                        ></path>
                      </svg>
                    </CircularProgressbarWithChildren>
                  </div>
                  <button className={styles.button}>HTML</button>
                  <p className={styles.p}>
                    HTML is the standard markup language used to can create
                    Websites.
                  </p>
                </div>

                <div className={styles.webDevelopmentCardContent}>
                  <div style={{ width: 70, height: 70 }}>
                    <CircularProgressbarWithChildren value={80}
                    styles={buildStyles({
                      pathColor: "#65a7d3",
                    })}>
                      <svg
                        className={styles.icons}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="100"
                        height="100"
                        viewBox="0 0 48 48"
                      >
                        <linearGradient
                          id="TQDriqswrKwPOniLrPT12a_7gdY5qNXaKC0_gr1"
                          x1="16.33"
                          x2="32.293"
                          y1="-2.748"
                          y2="41.109"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stop-color="#2aa4f4"></stop>
                          <stop offset="1" stop-color="#007ad9"></stop>
                        </linearGradient>
                        <path
                          fill="url(#TQDriqswrKwPOniLrPT12a_7gdY5qNXaKC0_gr1)"
                          d="M7.192,7.176l2.627,29.77c0.109,1.237,0.97,2.28,2.164,2.621l10.643,3.041	c0.898,0.257,1.849,0.257,2.747,0l10.643-3.041c1.194-0.341,2.055-1.383,2.164-2.621l2.627-29.77C40.911,6.006,39.99,5,38.816,5	H9.184C8.01,5,7.089,6.006,7.192,7.176z"
                        ></path>
                        <path
                          fill="#35c1f1"
                          d="M24,8v31.9l9.876-2.822c0.797-0.228,1.371-0.924,1.443-1.749l2.286-26.242	C37.656,8.502,37.196,8,36.609,8H24z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M33.1,13H24v4h4.9l-0.3,4H24v4h4.4l-0.3,4.5L24,30.9v4.2l7.9-2.6L32.6,21l0,0L33.1,13z"
                        ></path>
                        <path
                          fill="#d6e0e9"
                          d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4	L19.8,27z"
                        ></path>
                        <path
                          d="M33.1,13l-0.5,8l-0.7,11.5L24,35.1l-7.9-2.6L15.8,27h4l0.1,2.5l4.1,1.4l4.1-1.4l0.3-4.5H24h-4.4l-0.2-4H24h4.6l0.3-4H24 h-8.9l-0.3-4H24H33.1 M34.164,12H33.1H24h-9.2h-1.078l0.081,1.075l0.3,4L14.172,18H15.1H24h3.822l-0.15,2H24h-4.6h-1.051 l0.052,1.05l0.2,4L18.649,26H15.8h-1.056l0.058,1.054l0.3,5.5l0.037,0.682l0.649,0.214l7.9,2.6L24,36.153l0.313-0.103l7.9-2.6 l0.644-0.212l0.041-0.677l0.7-11.5l0.5-7.998L34.164,12L34.164,12z M20.761,26H24h3.331l-0.185,2.769L24,29.843l-3.128-1.068 l-0.073-1.815L20.761,26L20.761,26z"
                          opacity=".05"
                        ></path>
                        <path
                          d="M33.1,13l-0.5,8l-0.7,11.5L24,35.1l-7.9-2.6L15.8,27h4l0.1,2.5l4.1,1.4l4.1-1.4l0.3-4.5H24h-4.4l-0.2-4H24h4.6l0.3-4H24 h-8.9l-0.3-4H24H33.1 M33.632,12.5H33.1H24h-9.2h-0.539l0.04,0.537l0.3,4l0.035,0.463H15.1H24h4.361l-0.225,3H24h-4.6h-0.526 l0.026,0.525l0.2,4l0.024,0.475H19.6H24h3.866l-0.242,3.634L24,30.372l-3.614-1.234L20.3,26.98L20.28,26.5H19.8h-4h-0.528 l0.029,0.527l0.3,5.5l0.019,0.341l0.324,0.107l7.9,2.6L24,35.626l0.156-0.051l7.9-2.6l0.322-0.106l0.021-0.339l0.7-11.5l0.5-7.999 L33.632,12.5L33.632,12.5z"
                          opacity=".07"
                        ></path>
                      </svg>
                    </CircularProgressbarWithChildren>
                  </div>
                  <button className={styles.button}>CSS</button>
                  <p className={styles.p}>
                    Cascading Style Sheets is a stylesheet language used to
                    describe the presentation of a HTML document
                  </p>
                </div>

                <div className={styles.webDevelopmentCardContent}>
                  <div style={{ width: 70, height: 70 }}>
                    <CircularProgressbarWithChildren value={80} 
                    styles={buildStyles({
                      pathColor: "#65a7d3",
                    })}>
                      <svg
                        className={styles.icons}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="100"
                        height="100"
                        viewBox="0 0 30 30"
                        fill="#08b5f1"
                      >
                        <path d="M 10.679688 4.1816406 C 10.068687 4.1816406 9.502 4.3184219 9 4.6074219 C 7.4311297 5.5132122 6.8339651 7.7205462 7.1503906 10.46875 C 4.6127006 11.568833 3 13.188667 3 15 C 3 16.811333 4.6127006 18.431167 7.1503906 19.53125 C 6.8341285 22.279346 7.4311297 24.486788 9 25.392578 C 9.501 25.681578 10.067687 25.818359 10.679688 25.818359 C 11.982314 25.818359 13.48785 25.164589 15 24.042969 C 16.512282 25.164589 18.01964 25.818359 19.322266 25.818359 C 19.933266 25.818359 20.499953 25.681578 21.001953 25.392578 C 22.570814 24.486793 23.167976 22.279432 22.851562 19.53125 C 25.388297 18.431178 27 16.81094 27 15 C 27 13.188667 25.387299 11.568833 22.849609 10.46875 C 23.165872 7.7206538 22.56887 5.5132122 21 4.6074219 C 20.499 4.3174219 19.932312 4.1816406 19.320312 4.1816406 C 18.017686 4.1816406 16.51215 4.8354109 15 5.9570312 C 13.487763 4.8354109 11.981863 4.1816406 10.679688 4.1816406 z M 10.679688 5.9316406 C 11.461321 5.9316406 12.49496 6.3472486 13.617188 7.1171875 C 12.95737 7.7398717 12.311153 8.4479321 11.689453 9.2363281 C 10.681079 9.3809166 9.7303472 9.5916908 8.8496094 9.8554688 C 8.8448793 9.7943902 8.8336776 9.7303008 8.8300781 9.6699219 C 8.7230781 7.8899219 9.114 6.5630469 9.875 6.1230469 C 10.1 5.9930469 10.362688 5.9316406 10.679688 5.9316406 z M 19.320312 5.9316406 C 19.636312 5.9316406 19.9 5.9930469 20.125 6.1230469 C 20.886 6.5620469 21.276922 7.8899219 21.169922 9.6699219 C 21.166295 9.7303008 21.155145 9.7943902 21.150391 9.8554688 C 20.2691 9.5915252 19.317669 9.3809265 18.308594 9.2363281 C 17.686902 8.4480417 17.042616 7.7397993 16.382812 7.1171875 C 17.504962 6.3473772 18.539083 5.9316406 19.320312 5.9316406 z M 15 8.2285156 C 15.27108 8.4752506 15.540266 8.7360345 15.8125 9.0214844 C 15.542718 9.012422 15.274373 9 15 9 C 14.726286 9 14.458598 9.0124652 14.189453 9.0214844 C 14.461446 8.7363308 14.729174 8.4750167 15 8.2285156 z M 15 10.75 C 15.828688 10.75 16.614128 10.796321 17.359375 10.876953 C 17.813861 11.494697 18.261774 12.147811 18.681641 12.875 C 19.084074 13.572033 19.439938 14.285488 19.753906 15 C 19.439896 15.714942 19.084316 16.429502 18.681641 17.126953 C 18.263078 17.852044 17.816279 18.500949 17.363281 19.117188 C 16.591711 19.201607 15.800219 19.25 15 19.25 C 14.171312 19.25 13.385872 19.203679 12.640625 19.123047 C 12.186139 18.505303 11.738226 17.854142 11.318359 17.126953 C 10.915684 16.429502 10.560194 15.714942 10.246094 15 C 10.559972 14.285488 10.915926 13.572033 11.318359 12.875 C 11.737083 12.149909 12.183612 11.499051 12.636719 10.882812 C 13.408289 10.798393 14.199781 10.75 15 10.75 z M 19.746094 11.291016 C 20.142841 11.386804 20.524253 11.490209 20.882812 11.605469 C 20.801579 11.97252 20.702235 12.346608 20.589844 12.724609 C 20.461164 12.483141 20.336375 12.240903 20.197266 12 C 20.054139 11.752196 19.895244 11.529558 19.746094 11.291016 z M 10.251953 11.292969 C 10.103305 11.530776 9.9454023 11.752991 9.8027344 12 C 9.6636666 12.240944 9.5387971 12.483106 9.4101562 12.724609 C 9.29751 12.345829 9.1965499 11.971295 9.1152344 11.603516 C 9.4803698 11.48815 9.86083 11.385986 10.251953 11.292969 z M 7.46875 12.246094 C 7.6794464 13.135714 7.9717297 14.057918 8.3476562 14.998047 C 7.9725263 15.935943 7.6814729 16.856453 7.4707031 17.744141 C 5.7292327 16.903203 4.75 15.856373 4.75 15 C 4.75 14.121 5.701875 13.119266 7.296875 12.322266 C 7.3513169 12.295031 7.4131225 12.272692 7.46875 12.246094 z M 22.529297 12.255859 C 24.270767 13.096797 25.25 14.143627 25.25 15 C 25.25 15.879 24.298125 16.880734 22.703125 17.677734 C 22.648683 17.704969 22.586877 17.727308 22.53125 17.753906 C 22.32043 16.863764 22.030541 15.940699 21.654297 15 C 22.028977 14.062913 22.318703 13.142804 22.529297 12.255859 z M 15 13 C 13.895 13 13 13.895 13 15 C 13 16.105 13.895 17 15 17 C 16.105 17 17 16.105 17 15 C 17 13.895 16.105 13 15 13 z M 9.4101562 17.275391 C 9.5388794 17.516948 9.6655262 17.759008 9.8046875 18 C 9.9476585 18.247625 10.104915 18.470608 10.253906 18.708984 C 9.857159 18.613196 9.4757466 18.509791 9.1171875 18.394531 C 9.1984813 18.02725 9.2976676 17.653633 9.4101562 17.275391 z M 20.589844 17.277344 C 20.702364 17.655759 20.803517 18.02905 20.884766 18.396484 C 20.51963 18.51185 20.13917 18.614014 19.748047 18.707031 C 19.896695 18.469224 20.054598 18.247009 20.197266 18 C 20.336044 17.759557 20.461449 17.518344 20.589844 17.277344 z M 8.8496094 20.144531 C 9.7309004 20.408475 10.682331 20.619073 11.691406 20.763672 C 12.313288 21.552345 12.957085 22.261935 13.617188 22.884766 C 12.495042 23.654481 11.461272 24.070312 10.679688 24.070312 C 10.363687 24.070312 10.1 24.006953 9.875 23.876953 C 9.114 23.437953 8.7230781 22.112031 8.8300781 20.332031 C 8.8337424 20.271023 8.8447938 20.206253 8.8496094 20.144531 z M 21.150391 20.144531 C 21.155182 20.206253 21.166285 20.271023 21.169922 20.332031 C 21.276922 22.112031 20.886 23.436953 20.125 23.876953 C 19.9 24.006953 19.637312 24.070313 19.320312 24.070312 C 18.538728 24.070312 17.504958 23.654609 16.382812 22.884766 C 17.042964 22.261863 17.688542 21.552454 18.310547 20.763672 C 19.318921 20.619083 20.269653 20.408309 21.150391 20.144531 z M 14.1875 20.978516 C 14.457282 20.987578 14.725627 21 15 21 C 15.274373 21 15.542718 20.987578 15.8125 20.978516 C 15.540266 21.263964 15.27108 21.524765 15 21.771484 C 14.72892 21.524749 14.459734 21.263966 14.1875 20.978516 z"></path>
                      </svg>
                    </CircularProgressbarWithChildren>
                  </div>
                  <button className={styles.button}>ReactJs</button>
                  <p className={styles.p}>
                    React is a JavaScript library for building user interfaces,
                    allows us to create reusable UI components.
                  </p>
                </div>

                <div className={styles.webDevelopmentCardContent}>
                  <div style={{ width: 70, height: 70 }}>
                    <CircularProgressbarWithChildren value={70} 
                    styles={buildStyles({
                      pathColor: "#65a7d3",
                    })}>
                      <svg
                        className={styles.icons}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="100"
                        height="100"
                        viewBox="0 0 48 48"
                      >
                        <linearGradient
                          id="NRNx2IPDe7PJlJvrxOKgWa_MWiBjkuHeMVq_gr1"
                          x1="24"
                          x2="24"
                          y1="43.734"
                          y2="4.266"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stop-color="#0a070a"></stop>
                          <stop offset=".465" stop-color="#2b2b2b"></stop>
                          <stop offset="1" stop-color="#4b4b4b"></stop>
                        </linearGradient>
                        <circle
                          cx="24"
                          cy="24"
                          r="19.734"
                          fill="url(#NRNx2IPDe7PJlJvrxOKgWa_MWiBjkuHeMVq_gr1)"
                        ></circle>
                        <rect
                          width="3.023"
                          height="15.996"
                          x="15.992"
                          y="16.027"
                          fill="#fff"
                        ></rect>
                        <linearGradient
                          id="NRNx2IPDe7PJlJvrxOKgWb_MWiBjkuHeMVq_gr2"
                          x1="30.512"
                          x2="30.512"
                          y1="33.021"
                          y2="18.431"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset=".377"
                            stop-color="#fff"
                            stop-opacity="0"
                          ></stop>
                          <stop
                            offset=".666"
                            stop-color="#fff"
                            stop-opacity=".3"
                          ></stop>
                          <stop offset=".988" stop-color="#fff"></stop>
                        </linearGradient>
                        <rect
                          width="2.953"
                          height="14.59"
                          x="29.035"
                          y="15.957"
                          fill="url(#NRNx2IPDe7PJlJvrxOKgWb_MWiBjkuHeMVq_gr2)"
                        ></rect>
                        <linearGradient
                          id="NRNx2IPDe7PJlJvrxOKgWc_MWiBjkuHeMVq_gr3"
                          x1="22.102"
                          x2="36.661"
                          y1="21.443"
                          y2="40.529"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset=".296" stop-color="#fff"></stop>
                          <stop
                            offset=".521"
                            stop-color="#fff"
                            stop-opacity=".5"
                          ></stop>
                          <stop
                            offset=".838"
                            stop-color="#fff"
                            stop-opacity="0"
                          ></stop>
                        </linearGradient>
                        <polygon
                          fill="url(#NRNx2IPDe7PJlJvrxOKgWc_MWiBjkuHeMVq_gr3)"
                          points="36.781,38.094 34.168,39.09 15.992,16.027 19.508,16.027"
                        ></polygon>
                      </svg>
                    </CircularProgressbarWithChildren>
                  </div>
                  <button className={styles.button}>NextJs</button>
                  <p className={styles.p}>
                    Next.js enables to create full-stack webapplications by
                    extending React features, and integrating powerful
                    Rust-based JavaScript tooling for the fastest builds.
                  </p>
                </div>

                <div className={styles.webDevelopmentCardContent}>
                  <div style={{ width: 70, height: 70 }}>
                    <CircularProgressbarWithChildren value={70}
                    styles={buildStyles({
                      pathColor: "#65a7d3",
                    })}
                  >
                      <svg
                        className={styles.icons}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="100"
                        height="100"
                        viewBox="0 0 48 48"
                        fill="black"
                      >
                        <path
                          // fill="#21a366"
                          fill="black"
                          d="M24.007,45.419c-0.574,0-1.143-0.15-1.646-0.44l-5.24-3.103c-0.783-0.438-0.401-0.593-0.143-0.682	c1.044-0.365,1.255-0.448,2.369-1.081c0.117-0.067,0.27-0.043,0.39,0.028l4.026,2.389c0.145,0.079,0.352,0.079,0.486,0l15.697-9.061	c0.145-0.083,0.24-0.251,0.24-0.424V14.932c0-0.181-0.094-0.342-0.243-0.432L24.253,5.446c-0.145-0.086-0.338-0.086-0.483,0	L8.082,14.499c-0.152,0.086-0.249,0.255-0.249,0.428v18.114c0,0.173,0.094,0.338,0.244,0.42l4.299,2.483	c2.334,1.167,3.76-0.208,3.76-1.591V16.476c0-0.255,0.2-0.452,0.456-0.452h1.988c0.248,0,0.452,0.196,0.452,0.452v17.886	c0,3.112-1.697,4.9-4.648,4.9c-0.908,0-1.623,0-3.619-0.982l-4.118-2.373C5.629,35.317,5,34.216,5,33.042V14.928	c0-1.179,0.629-2.279,1.646-2.861L22.36,3.002c0.994-0.562,2.314-0.562,3.301,0l15.694,9.069C42.367,12.656,43,13.753,43,14.932	v18.114c0,1.175-0.633,2.271-1.646,2.861L25.66,44.971c-0.503,0.291-1.073,0.44-1.654,0.44"
                        ></path>
                        <path
                          // fill="#21a366"
                          fill="black"
                          d="M28.856,32.937c-6.868,0-8.308-3.153-8.308-5.797c0-0.251,0.203-0.452,0.455-0.452h2.028	c0.224,0,0.413,0.163,0.448,0.384c0.306,2.066,1.218,3.108,5.371,3.108c3.308,0,4.715-0.747,4.715-2.502	c0-1.01-0.401-1.76-5.54-2.263c-4.299-0.424-6.955-1.371-6.955-4.809c0-3.167,2.672-5.053,7.147-5.053	c5.026,0,7.517,1.745,7.831,5.493c0.012,0.13-0.035,0.255-0.122,0.35c-0.086,0.09-0.208,0.145-0.334,0.145h-2.039	c-0.212,0-0.397-0.149-0.44-0.354c-0.491-2.173-1.678-2.868-4.904-2.868c-3.611,0-4.031,1.257-4.031,2.2	c0,1.143,0.495,1.477,5.367,2.122c4.825,0.64,7.116,1.544,7.116,4.935c0,3.418-2.853,5.379-7.827,5.379"
                        ></path>
                      </svg>
                    </CircularProgressbarWithChildren>
                  </div>
                  <button className={styles.button}>NodeJs</button>
                  <p className={styles.p}>
                    Node.js is a cross-platform, open-source JavaScript runtime
                    environment.
                  </p>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </div>

        <div className={styles.webDesignContainer}>
          <Accordion.Item eventKey="2" className={styles.skillsCard}>
            <Accordion.Header className={styles.AccordionHeader} >Web Design</Accordion.Header>

            <Accordion.Body
            style={{
              backgroundImage: "linear-gradient(135deg,#2A1B3D, #ac9af5 )",
            }}
            >
              <div className={styles.webDesignCard}>
                <div className={styles.webDesignCardContent}>
                  <div style={{ width: 70, height: 70 }}>
                    <CircularProgressbarWithChildren value={70}
                    styles={buildStyles({
                      pathColor: "#65a7d3",
                    })} >
                      <svg
                        className={styles.icons}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="100"
                        height="100"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#e64a19"
                          d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"
                        ></path>
                        <path
                          fill="#7c4dff"
                          d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"
                        ></path>
                        <path
                          fill="#66bb6a"
                          d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"
                        ></path>
                        <path
                          fill="#ff7043"
                          d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"
                        ></path>
                        <circle cx="32" cy="24" r="7" fill="#29b6f6"></circle>
                      </svg>
                    </CircularProgressbarWithChildren>
                  </div>
                  <button className={styles.button}>Figma</button>
                  <p className={styles.p}>
                    Figma is a collaborative web application for interface
                    design.
                  </p>
                </div>

                <div className={styles.webDesignCardContent}>
                  <div style={{ width: 70, height: 70 }}>
                    <CircularProgressbarWithChildren value={70} styles={buildStyles({
                        pathColor: "#65a7d3",
                      })} >
                      <svg
                        className={styles.icons}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="100"
                        height="100"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#fff"
                          d="M24 4.050000000000001A19.95 19.95 0 1 0 24 43.95A19.95 19.95 0 1 0 24 4.050000000000001Z"
                        ></path>
                        <path
                          fill="#01579b"
                          d="M8.001,24c0,6.336,3.68,11.806,9.018,14.4L9.385,17.488C8.498,19.479,8.001,21.676,8.001,24z M34.804,23.194c0-1.977-1.063-3.35-1.67-4.412c-0.813-1.329-1.576-2.437-1.576-3.752c0-1.465,1.471-2.84,3.041-2.84 c0.071,0,0.135,0.006,0.206,0.008C31.961,9.584,28.168,8,24.001,8c-5.389,0-10.153,2.666-13.052,6.749 c0.228,0.074,0.307,0.039,0.611,0.039c1.669,0,4.264-0.2,4.264-0.2c0.86-0.057,0.965,1.212,0.099,1.316c0,0-0.864,0.105-1.828,0.152 l5.931,17.778l3.5-10.501l-2.603-7.248c-0.861-0.046-1.679-0.152-1.679-0.152c-0.862-0.056-0.762-1.375,0.098-1.316 c0,0,2.648,0.2,4.217,0.2c1.675,0,4.264-0.2,4.264-0.2c0.861-0.057,0.965,1.212,0.104,1.316c0,0-0.87,0.105-1.832,0.152l5.891,17.61 l1.599-5.326C34.399,26.289,34.804,24.569,34.804,23.194z M24.281,25.396l-4.8,13.952c1.436,0.426,2.95,0.652,4.52,0.652 c1.861,0,3.649-0.324,5.316-0.907c-0.04-0.071-0.085-0.143-0.118-0.22L24.281,25.396z M38.043,16.318 c0.071,0.51,0.108,1.059,0.108,1.645c0,1.628-0.306,3.451-1.219,5.737l-4.885,14.135C36.805,35.063,40,29.902,40,24 C40,21.219,39.289,18.604,38.043,16.318z"
                        ></path>
                        <path
                          fill="#01579b"
                          d="M4,24c0,11.024,8.97,20,19.999,20C35.03,44,44,35.024,44,24S35.03,4,24,4S4,12.976,4,24z M5.995,24 c0-9.924,8.074-17.999,18.004-17.999S42.005,14.076,42.005,24S33.929,42.001,24,42.001C14.072,42.001,5.995,33.924,5.995,24z"
                        ></path>
                      </svg>
                    </CircularProgressbarWithChildren>
                  </div>
                  <button className={styles.button}>Wordpress</button>
                  <p className={styles.p}>
                    WordPress is a free and open platform for creating websites
                    and blogs without coding
                  </p>
                </div>
              </div>
            </Accordion.Body>
            {/* </Accordion.Collapse> */}
          </Accordion.Item>
        </div>

        <div className={styles.DataScienceContainer}>
          <Accordion.Item eventKey="3" className={styles.skillsCard}>
            <Accordion.Header className={styles.AccordionHeader} >Data Science</Accordion.Header>

            <Accordion.Body
              style={{
                backgroundImage: "linear-gradient(135deg,#2A1B3D, #ac9af5 )",
              }}
            >
              <div className={styles.DataScienceCard}>
                <div className={styles.DataScienceCardContent}>
                  <div style={{ width: 70, height: 70 }}>
                    <CircularProgressbarWithChildren value={90} styles={buildStyles({
                        pathColor: "#65a7d3",
                      })} >
                      <svg
                        className={styles.icons}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="100"
                        height="100"
                        viewBox="0 0 48 48"
                      >
                        <polygon
                          fill="#00acc1"
                          points="21.196,12.276 14.392,8.842 6.922,12.569 13.912,16.078"
                        ></polygon>
                        <polygon
                          fill="#00acc1"
                          points="24.317,13.85 31.451,17.453 24.049,21.169 17.049,17.654"
                        ></polygon>
                        <polygon
                          fill="#00acc1"
                          points="33.846,8.893 41.176,12.569 34.619,15.86 27.47,12.254"
                        ></polygon>
                        <polygon
                          fill="#00acc1"
                          points="30.69,7.31 24.091,4 17.564,7.258 24.364,10.687"
                        ></polygon>
                        <polygon
                          fill="#00acc1"
                          points="25.532,35.725 25.532,44.73 33.525,40.74 33.518,31.732"
                        ></polygon>
                        <polygon
                          fill="#00acc1"
                          points="33.514,28.587 33.505,19.674 25.532,23.637 25.532,32.554"
                        ></polygon>
                        <polygon
                          fill="#00acc1"
                          points="43.111,26.918 43.111,35.957 36.292,39.359 36.287,30.361"
                        ></polygon>
                        <polygon
                          fill="#00acc1"
                          points="43.111,23.756 43.111,14.898 36.279,18.294 36.285,27.225"
                        ></polygon>
                        <path
                          fill="#448aff"
                          d="M22.71,23.637l-5.384-2.708v11.699c0,0-6.586-14.012-7.195-15.27 c-0.079-0.163-0.401-0.341-0.484-0.385C8.46,16.353,5,14.601,5,14.601v20.676l4.787,2.566V27.031c0,0,6.515,12.52,6.582,12.657 s0.718,1.455,1.418,1.919c0.929,0.618,4.919,3.016,4.919,3.016L22.71,23.637z"
                        ></path>
                      </svg>
                    </CircularProgressbarWithChildren>
                  </div>
                  <button className={styles.button}>Numpy</button>
                  <p className={styles.p}>
                    Numerical Python is a Python library used for working with
                    arrays.
                  </p>
                </div>

                <div className={styles.DataScienceCardContent}>
                  <div style={{ width: 70, height: 70 }}>
                    <CircularProgressbarWithChildren value={90} styles={buildStyles({
                        pathColor: "#65a7d3",
                      })} >
                      <svg
                        className={styles.icons}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="100"
                        height="100"
                        viewBox="0 0 48 48"
                      >
                        <polygon
                          fill="#00acc1"
                          points="21.196,12.276 14.392,8.842 6.922,12.569 13.912,16.078"
                        ></polygon>
                        <polygon
                          fill="#00acc1"
                          points="24.317,13.85 31.451,17.453 24.049,21.169 17.049,17.654"
                        ></polygon>
                        <polygon
                          fill="#00acc1"
                          points="33.846,8.893 41.176,12.569 34.619,15.86 27.47,12.254"
                        ></polygon>
                        <polygon
                          fill="#00acc1"
                          points="30.69,7.31 24.091,4 17.564,7.258 24.364,10.687"
                        ></polygon>
                        <polygon
                          fill="#00acc1"
                          points="25.532,35.725 25.532,44.73 33.525,40.74 33.518,31.732"
                        ></polygon>
                        <polygon
                          fill="#00acc1"
                          points="33.514,28.587 33.505,19.674 25.532,23.637 25.532,32.554"
                        ></polygon>
                        <polygon
                          fill="#00acc1"
                          points="43.111,26.918 43.111,35.957 36.292,39.359 36.287,30.361"
                        ></polygon>
                        <polygon
                          fill="#00acc1"
                          points="43.111,23.756 43.111,14.898 36.279,18.294 36.285,27.225"
                        ></polygon>
                        <path
                          fill="#448aff"
                          d="M22.71,23.637l-5.384-2.708v11.699c0,0-6.586-14.012-7.195-15.27 c-0.079-0.163-0.401-0.341-0.484-0.385C8.46,16.353,5,14.601,5,14.601v20.676l4.787,2.566V27.031c0,0,6.515,12.52,6.582,12.657 s0.718,1.455,1.418,1.919c0.929,0.618,4.919,3.016,4.919,3.016L22.71,23.637z"
                        ></path>
                      </svg>
                    </CircularProgressbarWithChildren>
                  </div>
                  <button className={styles.button}>Pandas</button>
                  <p className={styles.p}>
                    Pandas is a Python library, Pandas is used to analyze data.
                  </p>
                </div>

                <div className={styles.DataScienceCardContent}>
                  <div style={{ width: 70, height: 70 }}>
                    <CircularProgressbarWithChildren value={90} styles={buildStyles({
                        pathColor: "#65a7d3",
                      })} >
                      <svg
                        className={styles.icons}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                      >
                        <path
                          fill="#f89939"
                          d="M98.18 88.13c15.63-15.62 18.23-38.36 5.8-50.78-12.43-12.42-35.17-9.82-50.8 5.8-15.63 15.62-11.11 45.48-5.8 50.78 4.29 4.29 35.17 9.82 50.8-5.8Z"
                        />
                        <path
                          fill="#3499cd"
                          d="M34.04 65.56c-9.07-9.06-22.27-10.57-29.48-3.37-7.21 7.21-5.7 20.4 3.37 29.46 9.07 9.07 26.4 6.44 29.48 3.37 2.49-2.49 5.71-20.4-3.37-29.46Z"
                        />
                        <path
                          fill="#010101"
                          d="M123.82 85.68c-.58 0-.87-.35-.87-1.06 0-.53.35-1.69 1.04-3.46 1.01-2.59 1.52-4.45 1.52-5.58 0-.68-.2-1.25-.6-1.7-.4-.45-.9-.68-1.5-.68-.88 0-1.89.41-3.03 1.24-1.14.83-2.67 2.32-4.6 4.48.28-1.4.88-3.32 1.78-5.76l-4.31.83c-.98 2.12-1.69 4.03-2.13 5.73-.22.83-.38 1.69-.49 2.56-1.35 1.31-2.23 2.1-2.61 2.39-.39.29-.8.43-1.22.43-.39 0-.7-.15-.93-.44-.23-.29-.34-.69-.34-1.18 0-.53.1-1.14.3-1.83s.64-1.99 1.33-3.9l1.64-4.52-1.61.07c-1.46 2.78-3.17 4.28-5.13 4.49.53-1.38.8-2.44.8-3.18 0-.94-.46-1.41-1.38-1.41-1.09 0-1.94.51-2.55 1.54-.62 1.03-.93 2-.93 2.91s.51 1.55 1.52 2c-.66.97-1.4 1.88-2.2 2.74-.95.94-1.69 1.66-2.23 2.13-.55.49-1.06.73-1.52.73-.72 0-1.08-.51-1.08-1.52s.4-2.75 1.2-5.35l1.56-5.18h-.99l-3.61 2c-.59-1.35-1.62-2.03-3.09-2.03-1.17 0-2.51.5-4.03 1.49-1.52.99-2.77 2.28-3.74 3.89-.75 1.24-1.21 2.54-1.38 3.88-1.36 1.36-2.38 2.24-3.06 2.65-.71.42-1.45.63-2.23.63-1.99 0-3.22-1.15-3.69-3.45 5.19-1.52 7.78-3.5 7.78-5.94 0-.92-.33-1.66-.99-2.23-.66-.57-1.54-.85-2.63-.85-2.11 0-4.03 1.01-5.76 3.03-1.57 1.83-2.42 3.86-2.57 6.09-1.43 1.41-2.51 2.34-3.21 2.79-.72.46-1.4.69-2.03.69s-1.13-.3-1.5-.9c-.38-.6-.57-1.41-.57-2.44 0-.46.05-1.3.14-2.53 2.36-2.56 4.09-4.96 5.2-7.21 1.11-2.25 1.66-4.58 1.66-6.98 0-.85-.11-1.52-.33-2.02-.22-.5-.5-.75-.84-.75-.07 0-.18.02-.32.07l-4.49 1.66c-1.53 2.92-2.84 6.11-3.91 9.58-1.07 3.46-1.61 6.43-1.61 8.9 0 1.65.38 2.96 1.16 3.94.77.98 1.79 1.47 3.05 1.47 1.1 0 2.25-.35 3.46-1.05 1.21-.7 2.61-1.79 4.22-3.26s0-.02 0-.02c.19 1.11.65 2.04 1.37 2.8.99 1.02 2.28 1.54 3.88 1.54 1.44 0 2.75-.35 3.94-1.05 1.15-.67 2.44-1.72 3.88-3.11.12 1.04.46 1.94 1.03 2.71.73.97 1.61 1.46 2.64 1.46s2.09-.4 3.09-1.2c1-.8 2.08-2.05 3.26-3.73-.11 3.29.77 4.93 2.63 4.93.74 0 1.52-.27 2.33-.81s2.16-1.71 4.05-3.5c1.64-1.62 2.84-3.14 3.61-4.56 1.04-.18 1.99-.49 2.86-.94-1.78 2.79-2.67 5.02-2.67 6.68 0 .9.25 1.65.74 2.25.49.6 1.1.91 1.82.91 1.57 0 3.8-1.41 6.68-4.2 0 .22-.02.43-.02.65 0 .78.07 1.96.19 3.55l3.91-.92c0-1.06.02-1.9.05-2.53.06-.84.18-1.76.35-2.76.11-.59.38-1.15.81-1.68l.99-1.15c.36-.42.71-.8 1.02-1.13.37-.39.7-.72.99-.99.33-.29.62-.53.87-.69.27-.16.49-.25.65-.25.29 0 .44.19.44.57s-.28 1.26-.83 2.65c-1.04 2.59-1.56 4.52-1.56 5.78 0 .93.24 1.67.73 2.23.48.55 1.12.83 1.91.83 1.94 0 4.28-1.44 7-4.31V82.3c-1.93 2.27-3.32 3.41-4.18 3.41Zm-65.26-8.29c.8-3.91 1.62-6.94 2.45-9.11.83-2.17 1.47-3.26 1.9-3.26.2 0 .37.13.5.4.13.26.19.62.19 1.05 0 1.49-.46 3.26-1.4 5.33-.93 2.06-2.15 3.93-3.64 5.59Zm11.79-.98c.71-1.19 1.45-1.78 2.23-1.78.82 0 1.24.57 1.24 1.7 0 2.29-1.51 3.85-4.53 4.7 0-1.9.35-3.44 1.06-4.62Zm17.48 5.85c-1.04 2.01-2.16 3.01-3.33 3.01-.48 0-.88-.2-1.19-.59-.31-.39-.47-.91-.47-1.55 0-1.68.53-3.53 1.58-5.53 1.05-2 2.17-3 3.35-3 .49 0 .89.18 1.18.56.29.37.44.89.44 1.55 0 1.7-.52 3.55-1.56 5.56Z"
                        />
                        <path
                          fill="#fff"
                          d="M75.46 64.88c.15.21.22.48.22.8s-.09.61-.27.88-.44.49-.79.64c-.34.15-.73.23-1.16.23-.72 0-1.26-.15-1.64-.45s-.62-.74-.72-1.33l.93-.15c.05.37.2.66.43.85.24.2.57.3 1 .3s.75-.09.96-.26c.21-.17.31-.38.31-.62 0-.21-.09-.38-.28-.5-.13-.08-.45-.19-.96-.32-.69-.17-1.16-.32-1.43-.45s-.47-.3-.6-.53-.21-.47-.21-.74c0-.25.06-.47.17-.68.11-.21.27-.38.46-.52.15-.11.34-.2.59-.27.25-.07.52-.11.81-.11.43 0 .81.06 1.14.19.33.12.57.29.73.51.16.21.26.5.32.86l-.92.12c-.04-.28-.16-.51-.36-.67-.2-.16-.48-.24-.85-.24-.43 0-.74.07-.92.21-.18.14-.28.31-.28.5 0 .12.04.23.11.33.08.1.2.18.36.25.09.03.37.11.83.24.66.18 1.12.32 1.39.43.26.11.47.28.62.49Zm4.47 1.44c-.25.23-.55.34-.92.34-.46 0-.83-.17-1.11-.5s-.43-.88-.43-1.62.15-1.27.44-1.6.68-.51 1.15-.51c.31 0 .58.09.8.28.22.19.37.47.46.84l.91-.14c-.11-.56-.35-.99-.73-1.29-.38-.3-.87-.45-1.47-.45-.48 0-.91.11-1.32.34-.4.22-.71.56-.9 1.01-.2.45-.3.97-.3 1.57 0 .92.23 1.63.69 2.12.46.49 1.07.74 1.82.74.6 0 1.11-.18 1.53-.54.41-.36.67-.86.77-1.49l-.92-.12c-.07.47-.22.81-.47 1.04Zm2.19.98h.94v-5.52h-.94v5.52Zm0-6.55h.94v-1.08h-.94v1.08Zm6.73 1.02h-1.21l-2.22 2.25v-4.35h-.94v7.62h.94V65.1l.66-.63 1.83 2.82h1.16l-2.33-3.47 2.11-2.05Zm.96-1.02h.94v-1.08h-.94v1.08Zm0 6.55h.94v-5.52h-.94v5.52Zm4.41-.84c-.17.02-.31.04-.41.04-.14 0-.25-.02-.32-.07s-.13-.11-.16-.18c-.03-.08-.05-.25-.05-.51v-3.23h.94v-.73h-.94v-1.93l-.93.56v1.37h-.69v.73h.69v3.18c0 .56.04.93.11 1.1.08.18.21.32.39.42.19.11.45.16.79.16.21 0 .44-.03.71-.08l-.14-.83Z"
                        />
                      </svg>
                    </CircularProgressbarWithChildren>
                  </div>
                  <button className={styles.button}>Scikit Learn</button>
                  <p className={styles.p}>
                    It is machine-learning library, provides a plethora of tools
                    for various machine-learning tasks
                  </p>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </div>

        <div className={styles.DatabasesContainer}>
          <Accordion.Item eventKey="4" className={styles.skillsCard}>
            <Accordion.Header className={styles.AccordionHeader} >Databases</Accordion.Header>

            <Accordion.Body
              style={{
                backgroundImage: "linear-gradient(135deg,#2A1B3D, #ac9af5 )",
              }}
            >
              <div className={styles.DatabasesCard}>
                <div className={styles.DatabasesCardContent}>
                  <div style={{ width: 70, height: 70 }}>
                    <CircularProgressbarWithChildren value={70} styles={buildStyles({
                        pathColor: "#65a7d3",
                      })}>
                      <svg
                        className={styles.icons}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1792 1792"
                        id="Database"
                      >
                        <path
                          d="M896 768q237 0 443-43t325-127v170q0 69-103 128t-280 93.5-385 34.5-385-34.5T231 896 128 768V598q119 84 325 127t443 43zm0 768q237 0 443-43t325-127v170q0 69-103 128t-280 93.5-385 34.5-385-34.5-280-93.5-103-128v-170q119 84 325 127t443 43zm0-384q237 0 443-43t325-127v170q0 69-103 128t-280 93.5-385 34.5-385-34.5-280-93.5-103-128V982q119 84 325 127t443 43zM896 0q208 0 385 34.5t280 93.5 103 128v128q0 69-103 128t-280 93.5T896 640t-385-34.5T231 512 128 384V256q0-69 103-128t280-93.5T896 0z"
                          fill="#d8a353"
                          class="color000000 svgShape"
                        ></path>
                      </svg>
                    </CircularProgressbarWithChildren>
                  </div>
                  <button className={styles.button}>SQL</button>
                  <p className={styles.p}>
                    SQL is a standard language for storing, manipulating and
                    retrieving data in databases.
                  </p>
                </div>

                <div className={styles.DatabasesCardContent}>
                  <div style={{ width: 70, height: 70 }}>
                    <CircularProgressbarWithChildren value={85} styles={buildStyles({
                        pathColor: "#65a7d3",
                      })} >
                      <svg
                        className={styles.icons}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        id="mongodb"
                      >
                        <path
                          fill="#FFF"
                          d="m12.546 24-.639-.218s.078-3.257-1.091-3.491c-.779-.904.125-38.338 2.93-.125 0 0-.966.483-1.138 1.309-.186.811-.062 2.525-.062 2.525z"
                        ></path>
                        <path
                          fill="#A6A385"
                          d="m12.546 24-.639-.218s.078-3.257-1.091-3.491c-.779-.904.125-38.338 2.93-.125 0 0-.966.483-1.138 1.309-.186.811-.062 2.525-.062 2.525z"
                        ></path>
                        <path
                          fill="#FFF"
                          d="M12.889 20.852s5.595-3.678 4.286-11.33c-1.262-5.563-4.239-7.387-4.566-8.088-.358-.499-.701-1.371-.701-1.371l.234 15.475c-.001.015-.484 4.737.747 5.314z"
                        ></path>
                        <path
                          fill="#499D4A"
                          d="M12.889 20.852s5.595-3.678 4.286-11.33c-1.262-5.563-4.239-7.387-4.566-8.088-.358-.499-.701-1.371-.701-1.371l.234 15.475c-.001.015-.484 4.737.747 5.314z"
                        ></path>
                        <path
                          fill="#FFF"
                          d="M11.58 21.054s-5.252-3.584-4.94-9.896c.296-6.312 4.005-9.413 4.722-9.974.468-.498.483-.685.514-1.184.327.701.265 10.488.312 11.641.14 4.442-.249 8.572-.608 9.413z"
                        ></path>
                        <path
                          fill="#58AA50"
                          d="M11.58 21.054s-5.252-3.584-4.94-9.896c.296-6.312 4.005-9.413 4.722-9.974.468-.498.483-.685.514-1.184.327.701.265 10.488.312 11.641.14 4.442-.249 8.572-.608 9.413z"
                        ></path>
                      </svg>
                    </CircularProgressbarWithChildren>
                  </div>
                  <button className={styles.button}>MongoDb</button>
                  <p className={styles.p}>
                    MongoDB is a no structure document database. It stores data
                    in a type of JSON format called BSON.
                  </p>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </div>

        <div className={styles.ToolsContainer}>
          <Accordion.Item eventKey="5" className={styles.skillsCard}>
            <Accordion.Header className={styles.AccordionHeader} >Tools</Accordion.Header>

            <Accordion.Body
              style={{
                backgroundImage: "linear-gradient(135deg,#2A1B3D, #ac9af5 )",
              }}
            >
              <div className={styles.ToolsCard}>
                <div className={styles.ToolsCardContainer}>
                  <div style={{ width: 70, height: 70 }}>
                    <CircularProgressbarWithChildren value={75} styles={buildStyles({
                        pathColor: "#65a7d3",
                      })}>
                      <svg
                        className={styles.icons}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="100"
                        height="100"
                        viewBox="0 0 48 48"
                      >
                        <linearGradient
                          id="rL2wppHyxHVbobwndsT6Ca_AZOZNnY73haj_gr1"
                          x1="4"
                          x2="44"
                          y1="23.508"
                          y2="23.508"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stop-color="#4c4c4c"></stop>
                          <stop offset="1" stop-color="#343434"></stop>
                        </linearGradient>
                        <path
                          fill="url(#rL2wppHyxHVbobwndsT6Ca_AZOZNnY73haj_gr1)"
                          d="M24,4C12.954,4,4,12.954,4,24c0,8.887,5.801,16.411,13.82,19.016h12.36	C38.199,40.411,44,32.887,44,24C44,12.954,35.046,4,24,4z"
                        ></path>
                        <path
                          d="M30.01,41.996L30,36.198c0-0.939-0.22-1.856-0.642-2.687c5.641-1.133,8.386-4.468,8.386-10.177	c0-2.255-0.665-4.246-1.976-5.92c0.1-0.317,0.174-0.645,0.22-0.981c0.188-1.369-0.023-2.264-0.193-2.984l-0.027-0.116	c-0.186-0.796-0.409-1.364-0.418-1.388l-0.111-0.282l-0.111-0.282l-0.302-0.032l-0.303-0.032c0,0-0.199-0.021-0.501-0.021	c-0.419,0-1.04,0.042-1.627,0.241l-0.196,0.066c-0.74,0.249-1.439,0.485-2.417,1.069c-0.286,0.171-0.599,0.366-0.934,0.584	C27.334,12.881,25.705,12.69,24,12.69c-1.722,0-3.365,0.192-4.889,0.571c-0.339-0.22-0.654-0.417-0.942-0.589	c-0.978-0.584-1.677-0.819-2.417-1.069l-0.196-0.066c-0.585-0.199-1.207-0.241-1.626-0.241c-0.302,0-0.501,0.021-0.501,0.021	l-0.302,0.032l-0.3,0.031l-0.112,0.281l-0.113,0.283c-0.01,0.026-0.233,0.594-0.419,1.391l-0.027,0.115	c-0.17,0.719-0.381,1.615-0.193,2.983c0.048,0.346,0.125,0.685,0.23,1.011c-1.285,1.666-1.936,3.646-1.936,5.89	c0,5.695,2.748,9.028,8.397,10.17c-0.194,0.388-0.345,0.798-0.452,1.224c-0.197,0.067-0.378,0.112-0.538,0.137	c-0.238,0.036-0.487,0.054-0.739,0.054c-0.686,0-1.225-0.134-1.435-0.259c-0.313-0.186-0.872-0.727-1.414-1.518	c-0.463-0.675-1.185-1.558-1.992-1.927c-0.698-0.319-1.437-0.502-2.029-0.502c-0.138,0-0.265,0.01-0.376,0.028	c-0.517,0.082-0.949,0.366-1.184,0.78c-0.203,0.357-0.235,0.773-0.088,1.141c0.219,0.548,0.851,0.985,1.343,1.255	c0.242,0.133,0.765,0.619,1.07,1.109c0.229,0.368,0.335,0.63,0.482,0.992c0.087,0.215,0.183,0.449,0.313,0.732	c0.47,1.022,1.937,1.924,2.103,2.023c0.806,0.483,2.161,0.638,3.157,0.683l0.123,0.003c0,0,0.001,0,0.001,0	c0.24,0,0.57-0.023,1.004-0.071v2.613c0.002,0.529-0.537,0.649-1.25,0.638l0.547,0.184C19.395,43.572,21.645,44,24,44	c2.355,0,4.605-0.428,6.703-1.176l0.703-0.262C30.695,42.538,30.016,42.422,30.01,41.996z"
                          opacity=".05"
                        ></path>
                        <path
                          d="M30.781,42.797c-0.406,0.047-1.281-0.109-1.281-0.795v-5.804c0-1.094-0.328-2.151-0.936-3.052	c5.915-0.957,8.679-4.093,8.679-9.812c0-2.237-0.686-4.194-2.039-5.822c0.137-0.365,0.233-0.75,0.288-1.147	c0.175-1.276-0.016-2.086-0.184-2.801l-0.027-0.116c-0.178-0.761-0.388-1.297-0.397-1.319l-0.111-0.282l-0.303-0.032	c0,0-0.178-0.019-0.449-0.019c-0.381,0-0.944,0.037-1.466,0.215l-0.196,0.066c-0.714,0.241-1.389,0.468-2.321,1.024	c-0.332,0.198-0.702,0.431-1.101,0.694C27.404,13.394,25.745,13.19,24,13.19c-1.762,0-3.435,0.205-4.979,0.61	c-0.403-0.265-0.775-0.499-1.109-0.699c-0.932-0.556-1.607-0.784-2.321-1.024l-0.196-0.066c-0.521-0.177-1.085-0.215-1.466-0.215	c-0.271,0-0.449,0.019-0.449,0.019l-0.302,0.032l-0.113,0.283c-0.009,0.022-0.219,0.558-0.397,1.319l-0.027,0.116	c-0.169,0.715-0.36,1.524-0.184,2.8c0.056,0.407,0.156,0.801,0.298,1.174c-1.327,1.62-1.999,3.567-1.999,5.795	c0,5.703,2.766,8.838,8.686,9.806c-0.395,0.59-0.671,1.255-0.813,1.964c-0.33,0.13-0.629,0.216-0.891,0.256	c-0.263,0.04-0.537,0.06-0.814,0.06c-0.69,0-1.353-0.129-1.69-0.329c-0.44-0.261-1.057-0.914-1.572-1.665	c-0.35-0.51-1.047-1.417-1.788-1.755c-0.635-0.29-1.298-0.457-1.821-0.457c-0.11,0-0.21,0.008-0.298,0.022	c-0.366,0.058-0.668,0.252-0.828,0.534c-0.128,0.224-0.149,0.483-0.059,0.708c0.179,0.448,0.842,0.85,1.119,1.002	c0.335,0.184,0.919,0.744,1.254,1.284c0.251,0.404,0.37,0.697,0.521,1.067c0.085,0.209,0.178,0.437,0.304,0.712	c0.331,0.719,1.353,1.472,1.905,1.803c0.754,0.452,2.154,0.578,2.922,0.612l0.111,0.002c0.299,0,0.8-0.045,1.495-0.135v3.177	c0,0.779-0.991,0.81-1.234,0.81c-0.031,0,0.503,0.184,0.503,0.184C19.731,43.64,21.822,44,24,44c2.178,0,4.269-0.36,6.231-1.003	C30.231,42.997,30.812,42.793,30.781,42.797z"
                          opacity=".07"
                        ></path>
                        <path
                          fill="#fff"
                          d="M36.744,23.334c0-2.31-0.782-4.226-2.117-5.728c0.145-0.325,0.296-0.761,0.371-1.309	c0.172-1.25-0.031-2-0.203-2.734s-0.375-1.25-0.375-1.25s-0.922-0.094-1.703,0.172s-1.453,0.469-2.422,1.047	c-0.453,0.27-0.909,0.566-1.27,0.806C27.482,13.91,25.785,13.69,24,13.69c-1.801,0-3.513,0.221-5.067,0.652	c-0.362-0.241-0.821-0.539-1.277-0.811c-0.969-0.578-1.641-0.781-2.422-1.047s-1.703-0.172-1.703-0.172s-0.203,0.516-0.375,1.25	s-0.375,1.484-0.203,2.734c0.077,0.562,0.233,1.006,0.382,1.333c-1.31,1.493-2.078,3.397-2.078,5.704	c0,5.983,3.232,8.714,9.121,9.435c-0.687,0.726-1.148,1.656-1.303,2.691c-0.387,0.17-0.833,0.33-1.262,0.394	c-1.104,0.167-2.271,0-2.833-0.333s-1.229-1.083-1.729-1.813c-0.422-0.616-1.031-1.331-1.583-1.583	c-0.729-0.333-1.438-0.458-1.833-0.396c-0.396,0.063-0.583,0.354-0.5,0.563c0.083,0.208,0.479,0.521,0.896,0.75	c0.417,0.229,1.063,0.854,1.438,1.458c0.418,0.674,0.5,1.063,0.854,1.833c0.249,0.542,1.101,1.219,1.708,1.583	c0.521,0.313,1.562,0.491,2.688,0.542c0.389,0.018,1.308-0.096,2.083-0.206v3.75c0,0.639-0.585,1.125-1.191,1.013	C19.756,43.668,21.833,44,24,44c2.166,0,4.243-0.332,6.19-0.984C29.585,43.127,29,42.641,29,42.002v-5.804	c0-1.329-0.527-2.53-1.373-3.425C33.473,32.071,36.744,29.405,36.744,23.334z M11.239,32.727c-0.154-0.079-0.237-0.225-0.185-0.328	c0.052-0.103,0.22-0.122,0.374-0.043c0.154,0.079,0.237,0.225,0.185,0.328S11.393,32.806,11.239,32.727z M12.451,33.482	c-0.081,0.088-0.255,0.06-0.389-0.062s-0.177-0.293-0.096-0.381c0.081-0.088,0.255-0.06,0.389,0.062S12.532,33.394,12.451,33.482z M13.205,34.732c-0.102,0.072-0.275,0.005-0.386-0.15s-0.118-0.34-0.016-0.412s0.275-0.005,0.386,0.15	C13.299,34.475,13.307,34.66,13.205,34.732z M14.288,35.673c-0.069,0.112-0.265,0.117-0.437,0.012s-0.256-0.281-0.187-0.393	c0.069-0.112,0.265-0.117,0.437-0.012S14.357,35.561,14.288,35.673z M15.312,36.594c-0.213-0.026-0.371-0.159-0.353-0.297	c0.017-0.138,0.204-0.228,0.416-0.202c0.213,0.026,0.371,0.159,0.353,0.297C15.711,36.529,15.525,36.62,15.312,36.594z M16.963,36.833c-0.227-0.013-0.404-0.143-0.395-0.289c0.009-0.146,0.2-0.255,0.427-0.242c0.227,0.013,0.404,0.143,0.395,0.289	C17.381,36.738,17.19,36.846,16.963,36.833z M18.521,36.677c-0.242,0-0.438-0.126-0.438-0.281s0.196-0.281,0.438-0.281	c0.242,0,0.438,0.126,0.438,0.281S18.762,36.677,18.521,36.677z"
                        ></path>
                      </svg>
                    </CircularProgressbarWithChildren>
                  </div>
                  <button className={styles.button}>GitHub</button>
                  <p className={styles.p}>
                    GitHub is a code hosting platform for collaboration and
                    version control.
                  </p>
                </div>

                <div className={styles.ToolsCardContainer}>
                  <div style={{ width: 70, height: 70 }}>
                    <CircularProgressbarWithChildren value={88} styles={buildStyles({
                        pathColor: "#65a7d3",
                      })}>
                      <svg
                        className={styles.icons}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="100"
                        height="100"
                        viewBox="0 0 48 48"
                      >
                        <linearGradient
                          id="~jm6wMmI3aADOIa51_ZGPa_ezj3zaVtImPg_gr1"
                          x1="37.672"
                          x2="37.672"
                          y1="3.68"
                          y2="44.487"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stop-color="#c391f7"></stop>
                          <stop offset="1" stop-color="#b579f4"></stop>
                        </linearGradient>
                        <path
                          fill="url(#~jm6wMmI3aADOIa51_ZGPa_ezj3zaVtImPg_gr1)"
                          d="M44,10.781v26.403c0,1.147-0.653,2.193-1.684,2.696c-2.348,1.144-6.392,3.113-7.05,3.413	C34.33,43.721,33.742,44,33.007,44s-1.221-0.479-1.559-0.836C31.11,42.806,34,33,34,33V6.23c0,0-3.182-0.666-2.58-1.337	c0.603-0.671,1.107-0.899,1.736-0.899c0.725,0,1.311,0.323,1.971,0.641c0.468,0.225,4.732,2.271,7.174,3.443	C43.342,8.577,44,9.627,44,10.781z"
                        ></path>
                        <linearGradient
                          id="~jm6wMmI3aADOIa51_ZGPb_ezj3zaVtImPg_gr2"
                          x1="4.598"
                          x2="37.92"
                          y1="38.164"
                          y2="4.842"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset=".019" stop-color="#742fb6"></stop>
                          <stop offset=".32" stop-color="#702db5"></stop>
                          <stop offset=".364" stop-color="#5d2596"></stop>
                          <stop offset=".38" stop-color="#5d2596"></stop>
                          <stop offset=".48" stop-color="#5d2596"></stop>
                          <stop offset=".485" stop-color="#60279a"></stop>
                          <stop offset=".517" stop-color="#6f2dab"></stop>
                          <stop offset=".556" stop-color="#7932b6"></stop>
                          <stop offset=".61" stop-color="#7e34bd"></stop>
                          <stop offset=".762" stop-color="#8035bf"></stop>
                          <stop offset=".806" stop-color="#7d34bb"></stop>
                          <stop offset=".851" stop-color="#7530ae"></stop>
                          <stop offset=".897" stop-color="#66299a"></stop>
                          <stop offset=".943" stop-color="#52207d"></stop>
                          <stop offset=".963" stop-color="#481b6e"></stop>
                        </linearGradient>
                        <path
                          fill="url(#~jm6wMmI3aADOIa51_ZGPb_ezj3zaVtImPg_gr2)"
                          d="M4,32c0,1.928,0.261,2.214,2.134,3.028C7.59,35.661,8.17,36,8.559,36	c0.469,0,0.91-0.323,1.327-0.664S34,15.525,34,15.525V5.546c0-1.198-1.674-1.676-2.467-0.778c0,0-24.791,27.531-25.533,28.244	S5.767,31.119,4,32z"
                        ></path>
                        <linearGradient
                          id="~jm6wMmI3aADOIa51_ZGPc_ezj3zaVtImPg_gr3"
                          x1="4.405"
                          x2="35.886"
                          y1="25.413"
                          y2="30.112"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset=".002" stop-color="#9c55d4"></stop>
                          <stop offset=".003" stop-color="#9c55d4"></stop>
                          <stop offset=".337" stop-color="#9751d2"></stop>
                          <stop offset=".737" stop-color="#8847cb"></stop>
                          <stop offset=".848" stop-color="#8343c8"></stop>
                          <stop offset=".89" stop-color="#8042c3"></stop>
                          <stop offset=".938" stop-color="#773db6"></stop>
                          <stop offset=".988" stop-color="#68369f"></stop>
                          <stop offset="1" stop-color="#643499"></stop>
                        </linearGradient>
                        <path
                          fill="url(#~jm6wMmI3aADOIa51_ZGPc_ezj3zaVtImPg_gr3)"
                          d="M4.62,13.681c0.317-0.152,2.934-1.322,3.256-1.463C8.254,12.053,8.39,12,8.669,12	c0.308,0,0.518,0.117,1.001,0.514C10.345,13.068,34,32.483,34,32.483v9.759c0,1.675-1.744,1.847-2.728,0.741	C30.574,42.199,6.389,15.434,6.389,15.434S4,16.641,4,15.587C4,14.166,4.276,13.847,4.62,13.681z"
                        ></path>
                        <linearGradient
                          id="~jm6wMmI3aADOIa51_ZGPd_ezj3zaVtImPg_gr4"
                          x1="6.5"
                          x2="6.5"
                          y1="34.157"
                          y2="14.799"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stop-color="#5c1d9c"></stop>
                          <stop offset="1" stop-color="#561b90"></stop>
                        </linearGradient>
                        <path
                          fill="url(#~jm6wMmI3aADOIa51_ZGPd_ezj3zaVtImPg_gr4)"
                          d="M9,18.323v11.412c0,0-2.73,2.999-3.34,3.659C5.118,33.981,4,33.797,4,32.148v-16.72	c0-1.251,1.131-1.378,2.098-0.323C6.273,15.296,9,18.323,9,18.323z"
                        ></path>
                      </svg>
                    </CircularProgressbarWithChildren>
                  </div>
                  <button className={styles.button}>VsCode</button>
                  <p className={styles.p}>
                    Visual Studio Code is a free, lightweight and extensible
                    code editor for building applications.
                  </p>
                </div>

                <div className={styles.ToolsCardContainer}>
                  <div style={{ width: 70, height: 70 }}>
                    <CircularProgressbarWithChildren value={80} styles={buildStyles({
                        pathColor: "#65a7d3",
                      })}>
                      <svg
                        className={styles.icons}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        id="postman"
                      >
                        <path
                          fill="#F36933"
                          d="M18.855 6.049a.145.145 0 0 0-.053.159v-.001a.412.412 0 0 1-.054.45l.001-.001a.139.139 0 0 0-.03.087c0 .044.021.084.053.11a.143.143 0 0 0 .084.03c.042 0 .08-.02.106-.05a.69.69 0 0 0 .086-.752.138.138 0 0 0-.193-.032zM19.049 6.082l-.002-.004.001.003z"
                        ></path>
                        <path
                          fill="#F36933"
                          d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.588-3.801 13.429-10.374C24.745 6.955 20.102.943 13.527.099zm2.471 7.485a.851.851 0 0 0-.593.25l-4.453 4.453-.95-.95c4.389-4.376 5.181-4.418 5.996-3.753zm-4.863 4.861 4.44-4.44a.62.62 0 1 1 .848.902l-.001.001-4.699 4.125-.588-.588zm.33.694-1.1.238a.057.057 0 0 1-.013.001.06.06 0 0 1-.054-.033.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459 1.172-1.172.879.878-1.979.426a.11.11 0 0 1-.019.002.074.074 0 0 1-.066-.041.071.071 0 0 1-.011-.039c0-.021.009-.041.024-.054zm-3.646 6.057a.074.074 0 0 1-.069-.075v-.008a.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.426-1.255a.227.227 0 0 0-.117.258v-.002l.203.865a.125.125 0 0 1-.211.117h-.003l-1.228-1.229 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.278-3.428h-.002l-.839-.839 4.699-4.125a.985.985 0 0 0 .117-.125l.002-.002c-.147 1.345-2.029 3.245-3.977 5.091zm4.942-5.928a1.81 1.81 0 0 1-1.285-.532h.001l-.003-.002a1.822 1.822 0 0 1 2.461-2.681l-.003-.002-1.61 1.613a.117.117 0 0 0-.035.084c0 .033.013.063.035.084l1.247 1.247a1.801 1.801 0 0 1-.808.189zm1.294-.532c-.081.08-.169.151-.265.214l-.006.004h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522z"
                        ></path>
                      </svg>
                    </CircularProgressbarWithChildren>
                  </div>
                  <button className={styles.button}>Postman</button>
                  <p className={styles.p}>
                    Postman is an API development tool which helps to build,
                    test and modify APIs.
                  </p>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </div>

        <div className={styles.operatingSystemsContainer}>
          <Accordion.Item eventKey="6" className={styles.skillsCard}>
            <Accordion.Header className={styles.AccordionHeader} >Operating Systems</Accordion.Header>

            <Accordion.Body
            style={{
              backgroundImage: "linear-gradient(135deg,#2A1B3D, #ac9af5 )",
            }}
            >
              <div className={styles.operatingSystemsCard}>
                <div className={styles.operatingSystemsCardContent}>
                  <div style={{ width: 70, height: 70 }}>
                    <CircularProgressbarWithChildren value={88} styles={buildStyles({
                        pathColor: "#65a7d3",
                      })}>
                      <svg
                        className={styles.icons}
                        xmlns="http://www.w3.org/2000/svg"
                        width="2490"
                        height="2500"
                        preserveAspectRatio="xMidYMid"
                        viewBox="0 0 256 257"
                        id="windows"
                      >
                        <path
                          fill="#00ADEF"
                          d="M0 36.357L104.62 22.11l.045 100.914-104.57.595L0 36.358zm104.57 98.293l.08 101.002L.081 221.275l-.006-87.302 104.494.677zm12.682-114.405L255.968 0v121.74l-138.716 1.1V20.246zM256 135.6l-.033 121.191-138.716-19.578-.194-101.84L256 135.6z"
                        ></path>
                      </svg>
                    </CircularProgressbarWithChildren>
                  </div>
                  <button className={styles.button}>Windows</button>
                  <p className={styles.p}>
                    GitHub is a code hosting platform for collaboration and
                    version control.
                  </p>
                </div>

                <div className={styles.operatingSystemsCardContent}>
                  <div style={{ width: 70, height: 70 }}>
                    <CircularProgressbarWithChildren value={80} styles={buildStyles({
                        pathColor: "#65a7d3",
                      })}>
                      <svg
                        className={styles.icons}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        id="linux"
                      >
                        <path
                          fill="#303c42"
                          d="M20.926 19.074c-.207-.136-.421-.276-.573-.428-.088-.088-.048-.497-.026-.717.042-.422.084-.857-.199-1.17-.036-.04-.099-.078-.157-.117.014-.204.029-.405.029-.642 0-3.247-1.496-5.12-2.697-6.625C16.575 8.463 16 7.743 16 7l.001-.233c.008-1.38.024-4.253-1.502-5.788C13.853.33 13.012 0 12 0 9.899 0 8.5 1.021 8.5 6c0 1.371-.577 2.493-1.187 3.682-.268.521-.544 1.06-.776 1.63-.419 1.03-1.333 3.399-1.501 4.784-.54.227-.697.835-.785 1.197l-.081.334c-.074.046-.354.101-.538.138C3.021 17.885 2 18.087 2 19c0 .266.04.491.083.726.077.416.15.809-.067 1.649A.482.482 0 0 0 2 21.5c0 1.202 1.867 1.358 2.983 1.451.186.016.34.027.439.043.154.024.476.173.788.316.666.308 1.496.69 2.29.69.365 0 .673-.164.906-.434l.011.009C9.639 23.328 11.112 23 12 23h3.061c.055.193.135.385.288.553.27.297.657.447 1.151.447 1.298 0 1.927-.669 2.536-1.315.103-.109.208-.221.318-.331.253-.253.749-.434 1.187-.594.717-.262 1.459-.533 1.459-1.26 0-.721-.595-1.112-1.074-1.426z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M7.463 11.688c.215-.529.481-1.048.739-1.55.343-.668.688-1.35.938-2.086C9.748 8.589 10.621 9 11 9c.209 0 1.874-.559 2.83-1.199 1.92 3.928 2.156 6.516 2.168 8.949-.483.523-.733 1.786-.862 2.951-1.471 1.483-4.412 1.383-5.705 1.177a3.64 3.64 0 0 0-1.145-1.288c-.493-.343-.875-1.144-1.212-1.85-.326-.681-.621-1.291-1.044-1.573.139-1.039.829-2.994 1.433-4.479z"
                        ></path>
                        <path
                          fill="#f68919"
                          d="M8.5 23c-.575 0-1.294-.332-1.872-.598-.424-.196-.759-.351-1.05-.396a7.716 7.716 0 0 0-.512-.052c-1.489-.124-1.945-.305-2.054-.442.237-.983.136-1.528.054-1.968-.032-.176-.066-.345-.071-.535.083-.116.588-.216.832-.264.425-.084.792-.157 1.027-.392.222-.222.296-.528.369-.825.128-.528.181-.528.247-.533.177.079.492.739.701 1.176.391.818.833 1.745 1.543 2.239 1.006.701 1.222 1.769 1.054 2.303-.06.19-.149.287-.268.287zm11.697-2.18c-.535.195-1.141.416-1.55.826-.118.118-.229.236-.339.353-.547.581-.942 1-1.808 1-.201 0-.339-.041-.412-.12-.15-.165-.114-.556-.098-.723.006-.067.01-.121.01-.156.004-.655.15-2.438.369-3.584.04.057.08.115.129.167A1.34 1.34 0 0 0 17.5 19l.176.001.17.001c.5 0 1.038-.042 1.465-.448.025.288.109.574.335.8.224.224.494.401.731.557.376.247.622.42.638.53-.079.109-.524.272-.818.379zM11.454 6.001c.903.19 1.78.583 1.996.874-.505.361-2.111 1.088-2.438 1.125-.345-.039-1.418-.737-1.517-.965.095-.286 1.202-1.005 1.959-1.034z"
                        ></path>
                        <path
                          fill="#303c42"
                          d="M13.296 5.574c.158-.15.268-.402.268-.703 0-.468-.253-.847-.565-.847s-.565.379-.565.847c0 .141.029.269.07.386.252.082.526.187.792.317z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M13 3.176c-.468 0-.847.569-.847 1.271 0 .288.076.541.183.755.074.023.19.062.168.055a1.152 1.152 0 0 1-.07-.386c0-.468.253-.847.565-.847s.565.379.565.847c0 .301-.111.553-.268.703l.051.027c.294-.199.5-.638.5-1.153 0-.703-.379-1.272-.847-1.272zm-2.095 1.907c.075-.19.13-.399.13-.636 0-.702-.379-1.271-.847-1.271s-.847.569-.847 1.271c0 .472.179.867.434 1.086.011-.014.036-.019.051-.026a1.036 1.036 0 0 1-.202-.636c0-.468.253-.847.565-.847s.565.379.565.847c0 .094-.017.18-.036.264.044-.01.045-.018.187-.052z"
                        ></path>
                        <linearGradient
                          id="a"
                          x1="10.376"
                          x2="17.154"
                          y1="6.817"
                          y2="13.596"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stop-opacity=".1"></stop>
                          <stop offset="1" stop-opacity="0"></stop>
                        </linearGradient>
                        <path
                          fill="url(#a)"
                          d="M13.83 7.801C12.874 8.441 11.209 9 11 9c-.379 0-1.252-.411-1.859-.947l6.778 6.778c-.165-1.927-.66-4.107-2.089-7.03z"
                        ></path>
                        <linearGradient
                          id="b"
                          x1="5.245"
                          x2="23.086"
                          y1="10.06"
                          y2="18.379"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset="0"
                            stop-color="#fff"
                            stop-opacity=".2"
                          ></stop>
                          <stop
                            offset="1"
                            stop-color="#fff"
                            stop-opacity="0"
                          ></stop>
                        </linearGradient>
                        <path
                          fill="url(#b)"
                          d="M20.926 19.074c-.207-.136-.421-.276-.573-.428-.088-.088-.048-.497-.026-.717.042-.422.084-.857-.199-1.17-.036-.04-.099-.078-.157-.117.014-.204.029-.405.029-.642 0-3.247-1.496-5.12-2.697-6.625C16.575 8.463 16 7.743 16 7l.001-.233c.008-1.38.024-4.253-1.502-5.788C13.853.33 13.012 0 12 0 9.899 0 8.5 1.021 8.5 6c0 1.371-.577 2.493-1.187 3.682-.268.521-.544 1.06-.776 1.63-.419 1.03-1.333 3.399-1.501 4.784-.54.227-.697.835-.785 1.197l-.081.334c-.074.046-.354.101-.538.138C3.021 17.885 2 18.087 2 19c0 .266.04.491.083.726.077.416.15.809-.067 1.649A.482.482 0 0 0 2 21.5c0 1.202 1.867 1.358 2.983 1.451.186.016.34.027.439.043.154.024.476.173.788.316.666.308 1.496.69 2.29.69.365 0 .673-.164.906-.434l.011.009C9.639 23.328 11.112 23 12 23h3.061c.055.193.135.385.288.553.27.297.657.447 1.151.447 1.298 0 1.927-.669 2.536-1.315.103-.109.208-.221.318-.331.253-.253.749-.434 1.187-.594.717-.262 1.459-.533 1.459-1.26 0-.721-.595-1.112-1.074-1.426z"
                        ></path>
                      </svg>
                    </CircularProgressbarWithChildren>
                  </div>
                  <button className={styles.button}>Linux</button>
                  <p className={styles.p}>
                    GitHub is a code hosting platform for collaboration and
                    version control.
                  </p>
                </div>

                <div className={styles.operatingSystemsCardContent}>
                  <div style={{ width: 70, height: 70 }}>
                    <CircularProgressbarWithChildren value={95} styles={buildStyles({
                        pathColor: "#65a7d3",
                      })}>
                      <svg
                        className={styles.icons}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                        id="android"
                      >
                        <path
                          fill="#fff"
                          d="M21.012 91.125c-5.538.003-10.038-4.503-10.039-10.04l-.002-30.739c-.002-5.532 4.497-10.037 10.028-10.038 2.689-.002 5.207 1.041 7.105 2.937s2.942 4.418 2.944 7.099l-.003 30.74c.007 2.679-1.034 5.199-2.931 7.094-1.892 1.9-4.417 2.946-7.102 2.947M21.004 43.005c-4.053-.002-7.338 3.291-7.339 7.341l.005 30.736c.001 4.064 3.292 7.344 7.341 7.348 4.057-.005 7.343-3.285 7.339-7.347v-30.741c-.002-4.049-3.291-7.339-7.346-7.337"
                        ></path>
                        <path
                          fill="#fff"
                          d="M99.742 44.527l-2.698-.001-66.119.009-2.699.001-.002-2.699c-.006-11.08 6.03-21.385 15.917-27.473l-3.844-7.017c-.47-.822-.588-1.863-.314-2.815.278-.952.935-1.771 1.814-2.239.509-.288 1.131-.448 1.759-.447 1.362 0 2.609.739 3.267 1.933l4.023 7.329c4.163-1.527 8.558-2.306 13.099-2.305 4.606-.002 9.023.777 13.204 2.311l4.017-7.341c.647-1.191 1.903-1.933 3.263-1.932.612-.001 1.223.148 1.761.438.903.495 1.533 1.286 1.81 2.245.276.953.165 1.959-.318 2.832l-3.842 7.013c9.871 6.101 15.9 16.398 15.899 27.459l.003 2.699zM80.196 15.403l5.123-9.355c.273-.489.095-1.115-.399-1.386-.501-.271-1.119-.086-1.384.405l-5.176 9.45c-4.354-1.934-9.229-3.021-14.382-3.016-5.142-.005-10.008 1.078-14.349 3.005l-5.181-9.429c-.267-.497-.891-.679-1.379-.405-.497.266-.68.891-.403 1.379l5.125 9.348c-10.07 5.194-16.874 15.084-16.868 26.439l66.118-.008c.003-11.351-6.789-21.221-16.845-26.427m-31.256 14.457c-1.521-.003-2.763-1.241-2.763-2.771 0-1.523 1.24-2.774 2.766-2.774 1.533-.001 2.773 1.251 2.775 2.774.001 1.528-1.242 2.77-2.778 2.771m30.107-.006c-1.528.002-2.775-1.235-2.772-2.771 0-1.521 1.242-2.772 2.773-2.778 1.521.005 2.768 1.258 2.767 2.779 0 1.531-1.241 2.771-2.768 2.77M51.711 126.159c-5.533-.001-10.036-4.501-10.037-10.038l-.002-13.567-2.638.003c-2.817.001-5.461-1.094-7.448-3.082-1.99-1.986-3.087-4.633-3.083-7.452l-.01-47.627v-2.701h2.699l65.623-.01 2.7-.002v2.699l.007 47.633c.001 5.809-4.725 10.536-10.532 10.535l-2.654.002.003 13.562c0 5.534-4.502 10.039-10.033 10.039-2.681.006-5.197-1.036-7.098-2.937-1.901-1.896-2.948-4.416-2.947-7.096v-13.568h-4.511v13.565c-.002 5.535-4.503 10.043-10.039 10.042"
                        ></path>
                        <path
                          fill="#fff"
                          d="M31.205 92.022c-.004 4.337 3.497 7.838 7.831 7.837h5.333l.006 16.264c-.001 4.05 3.289 7.341 7.335 7.342 4.056 0 7.342-3.295 7.338-7.348l.001-16.259 9.909-.003-.001 16.263c.004 4.051 3.298 7.346 7.343 7.338 4.056.003 7.344-3.292 7.343-7.344l-.005-16.259 5.353-.001c4.319.001 7.832-3.508 7.832-7.837l-.009-47.635-65.621.012.012 47.63zM106.996 91.112c-5.536.001-10.039-4.498-10.038-10.036l-.008-30.738c.002-5.537 4.498-10.041 10.031-10.041 5.54-.001 10.046 4.502 10.045 10.038l.003 30.736c.001 5.534-4.498 10.042-10.033 10.041M106.986 42.996c-4.053-.004-7.337 3.287-7.337 7.342l.003 30.737c.002 4.059 3.286 7.343 7.342 7.34 4.054-.001 7.335-3.281 7.338-7.343l-.008-30.736c-.001-4.056-3.283-7.342-7.338-7.34"
                        ></path>
                        <path
                          fill="#A4C439"
                          d="M21.004 43.005c-4.053-.002-7.338 3.291-7.339 7.341l.005 30.736c.001 4.064 3.288 7.344 7.342 7.343 4.056 0 7.342-3.28 7.338-7.342v-30.741c-.002-4.049-3.291-7.339-7.346-7.337m59.192-27.602l5.123-9.355c.273-.489.094-1.111-.401-1.388-.5-.265-1.117-.085-1.382.407l-5.175 9.453c-4.354-1.938-9.227-3.024-14.383-3.019-5.142-.005-10.013 1.078-14.349 3.005l-5.181-9.429c-.269-.497-.889-.677-1.378-.406-.498.269-.681.892-.404 1.38l5.125 9.349c-10.07 5.193-16.874 15.083-16.868 26.438l66.118-.008c.003-11.351-6.789-21.221-16.845-26.427m-31.256 14.457c-1.521-.003-2.763-1.241-2.763-2.771 0-1.523 1.238-2.775 2.766-2.774 1.533-.001 2.773 1.251 2.775 2.774.001 1.528-1.242 2.77-2.778 2.771m30.107-.006c-1.528.002-2.772-1.237-2.772-2.771.006-1.52 1.242-2.772 2.773-2.778 1.521.005 2.768 1.258 2.767 2.779.002 1.531-1.241 2.771-2.768 2.77m-47.854 14.538l.011 47.635c-.003 4.333 3.502 7.831 7.832 7.831l5.333.002.006 16.264c-.001 4.05 3.291 7.342 7.335 7.342 4.056 0 7.342-3.295 7.343-7.347l-.004-16.26 9.909-.003.004 16.263c0 4.047 3.293 7.346 7.338 7.338 4.056.003 7.344-3.292 7.343-7.344l-.005-16.259 5.352-.004c4.32.002 7.834-3.5 7.836-7.834l-.009-47.635-65.624.011zm83.134 5.943c-.001-4.055-3.286-7.341-7.341-7.339-4.053-.004-7.337 3.287-7.337 7.342l.006 30.738c-.001 4.058 3.283 7.338 7.339 7.339 4.054-.001 7.337-3.281 7.338-7.343l-.005-30.737z"
                        ></path>
                      </svg>
                    </CircularProgressbarWithChildren>
                  </div>
                  <button className={styles.button}>Android</button>
                  <p className={styles.p}>
                    GitHub is a code hosting platform for collaboration and
                    version control.
                  </p>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </div>

      </Accordion>
    </div>
  );
}

export default Example;
