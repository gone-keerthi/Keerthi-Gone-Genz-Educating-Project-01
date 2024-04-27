import React from "react";
import styles from "./moreAbout.module.css";
import AboutImage from "./About.jpg";

// import animation effects from gsap
import { gsap } from "gsap";
// import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin"; // Import ScrambleTextPlugin

// gsap.registerPlugin(ScrambleTextPlugin);

const MoreAbout = () => {

  var tl = gsap.timeline({ defaults: { duration: 2, ease: "none" } });

  tl.to("#firstParagraph", {
    duration: 3,
    scrambleText: {
      text: "Welcome to my portfolio! I'm a final year B.Tech (CSE) undergraduate from Central University of Haryana with a passion for software development.",
      chars: "lowerCase",
      revealDelay: 0.5,
      tweenLength: false,
    },
  });

//   GSDevTools.create({animation: tl, minimal: true});
  return (
    <div className={styles.moreAboutComponent}>
      <div className={styles.moreAbout}>
        <div className={styles.moreAboutImgCard}>
          <img src={AboutImage} alt="Dp" />
        </div>
        <div className={styles.moreAboutCardBody}>
          <p id="firstParagraph">
            {/* Welcome to my portfolio! I'm a final year B.Tech (CSE) undergrad
            from Central University of Haryana with a passion for software
            development. */}
          </p>
          <p>
            In my journey through the fascinating world of technology, I've
            become adept at crafting efficient software solutions to real-world
            problems. Developing responsive cross-platform web applications has
            become second nature to me, and I find joy in using technology to
            make a meaningful impact.
          </p>
          <p>
            Proficient in languages like Python and C++, I've also mastered
            React.js for powerful front-end development and Node.js for
            server-side scripting. But beyond just coding, I've come to
            appreciate the power of data - understanding that it holds the
            answers to our questions if we know how to ask them.
          </p>
          <p>
            Currently, I'm actively seeking opportunities for web developer
            internships/jobs where I can apply my skills and continue to grow in
            this dynamic field. Let's build something amazing together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoreAbout;
