import React from "react";
import { Link } from 'react-router-dom'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import styles from "./About.module.css";
import DP from "./portfolio-DP.jpg";
import { useEffect } from "react";
import MoreAbout from "../MoreAbout/MoreAbout";

// import gsap-----
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

const About = () => {
  gsap.defaults({ ease: "none" });

  const texts = [
    "Software Developer!",
    "Front-end Developer!",
    "UI/UX Designer!",
    "MERN stack Developer!",
  ];

  // useEffect(() => {
  //   const tl = gsap.timeline({repeat:Infinity, repeatDelay:1});

  //   // Define an array of texts for each span
  //   const texts = [
  //     "Software Developer!",
  //     "Front-end Developer!",
  //     "UI/UX Designer!",
  //     "MERN stack Developer!"
  //   ];

  //   // Animate each span with different text one after the other
  //   for (let i = 0; i < texts.length; i++) {
  //     tl.to(`h6 span:nth-child(${i+1})`, {duration: 4, text:texts[i]})
  //       .to(`h6 span:nth-child(${i+1})`, {duration: 1, text:"", delay:1});// Delay to show each text
  //   }
  // }, []);

  const tl = gsap.timeline({ repeat: Infinity, repeatDelay: 1, yoyo: true });
  tl.to("h2", { duration: 4, text: "Keerthi" });
  //  .to("h6 span:nth-child(2)", {duration: 4, text:texts[1]})
  //  .to("h6 span:nth-child(3)", {duration: 4, text:texts[2]})
  //  .to("h6 span:nth-child(4)", {duration: 4, text:texts[3]});

  return (
    <div className={styles.AboutBody}>
      <div className={styles.cardContainer}>
        <div
          className={styles.card}
          //  style={{ width: "18rem" }}
        >
          <img
            src={DP}
            //  class="card-img-top"
            alt="..."
            className={styles.yourImage}
          />
        </div>

        <div className={styles.cardBody}>
          <h5 className={styles.cardTitle}> Hello, It's Me</h5>
          {/* <h2> Keerthi Gone </h2> */}
          <h2> </h2>
          {/* <h6> */}
          {/* And I'm a <span></span>  */}
          {/* <span></span> */}
          {/* <span></span>
            <span></span> */}
          {/* <span> Software Developer </span> <span>Front end Developer</span> */}
          {/* </h6> */}
          <div
            className={styles.socialIcons}
            // className={`${styles.socialIcons} ${animateIcons ? styles.animateIcons : ""}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 32 32"
              className={styles.svgIcons}
            >
              <path
                fill-rule="evenodd"
                d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 32 32"
              className={styles.svgIcons}
            >
              <path d="M 7.5 5 C 6.132813 5 5 6.132813 5 7.5 L 5 24.5 C 5 25.867188 6.132813 27 7.5 27 L 24.5 27 C 25.867188 27 27 25.867188 27 24.5 L 27 7.5 C 27 6.132813 25.867188 5 24.5 5 Z M 7.5 7 L 24.5 7 C 24.785156 7 25 7.214844 25 7.5 L 25 24.5 C 25 24.785156 24.785156 25 24.5 25 L 7.5 25 C 7.214844 25 7 24.785156 7 24.5 L 7 7.5 C 7 7.214844 7.214844 7 7.5 7 Z M 10.4375 8.71875 C 9.488281 8.71875 8.71875 9.488281 8.71875 10.4375 C 8.71875 11.386719 9.488281 12.15625 10.4375 12.15625 C 11.386719 12.15625 12.15625 11.386719 12.15625 10.4375 C 12.15625 9.488281 11.386719 8.71875 10.4375 8.71875 Z M 19.46875 13.28125 C 18.035156 13.28125 17.082031 14.066406 16.6875 14.8125 L 16.625 14.8125 L 16.625 13.5 L 13.8125 13.5 L 13.8125 23 L 16.75 23 L 16.75 18.3125 C 16.75 17.074219 16.996094 15.875 18.53125 15.875 C 20.042969 15.875 20.0625 17.273438 20.0625 18.375 L 20.0625 23 L 23 23 L 23 17.78125 C 23 15.226563 22.457031 13.28125 19.46875 13.28125 Z M 9 13.5 L 9 23 L 11.96875 23 L 11.96875 13.5 Z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 32 32"
              className={styles.svgIcons}
            >
              <path d="M 16 4 C 9.3844276 4 4 9.3844276 4 16 C 4 22.615572 9.3844276 28 16 28 C 22.615572 28 28 22.615572 28 16 C 28 9.3844276 22.615572 4 16 4 z M 16 6 C 21.534692 6 26 10.465308 26 16 C 26 21.027386 22.311682 25.161277 17.488281 25.878906 L 17.488281 18.916016 L 20.335938 18.916016 L 20.783203 16.023438 L 17.488281 16.023438 L 17.488281 14.443359 C 17.488281 13.242359 17.882859 12.175781 19.005859 12.175781 L 20.810547 12.175781 L 20.810547 9.6523438 C 20.493547 9.6093438 19.822688 9.515625 18.554688 9.515625 C 15.906688 9.515625 14.355469 10.913609 14.355469 14.099609 L 14.355469 16.023438 L 11.632812 16.023438 L 11.632812 18.916016 L 14.355469 18.916016 L 14.355469 25.853516 C 9.6088556 25.070647 6 20.973047 6 16 C 6 10.465308 10.465308 6 16 6 z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 32 32"
              className={styles.svgIcons}
            >
              <path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"></path>
            </svg>
          </div>
          <div className={styles.cardButton}>
            <a
              className={styles.button}
              href="https://drive.google.com/file/d/1CkuaAR6fxGho9Rsi4OPfs3UipMNs8cIk/view?usp=drive_link"
              target="_blank"
            >
              Download CV
            </a>
            {/* <Link to={'../MoreAbout/MoreAbout.jsx'}> */}
            <a className={styles.button} href="">Read More</a>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
