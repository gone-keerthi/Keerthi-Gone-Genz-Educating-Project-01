import React from "react";
import styles from "./resume.module.css";
const Resume = () => {
  return (
    <div className={styles.body}>
      <div className={styles.resumeContainer}>
        <div className={styles.MainContainer}>
          <div className={styles.educationContainer}>
            <h3 className={styles.tittle}> Education </h3>
            <div className={styles.educationContainerContent}>

              <div className={styles.educationContainerCard}>
                <h4 className={styles.TimePeriod} >2020-20241</h4>
                <p className={styles.graduationName}> Baxhelor's Degree </p>
                <p className={styles.instituteName}> Central University of Haryana </p>
              </div>

              <div className={styles.educationContainerCard}>
                <h4 className={styles.TimePeriod} > 2018-2020 </h4>
                <p className={styles.graduationName} > Under Graduation Degree </p>
                <p className={styles.instituteName}> T.S.W.R Jr College Gowlidoddi (RR dist) </p>
              </div>

              <div className={styles.educationContainerCard}>
                <h4 className={styles.TimePeriod}> 2017-2018 </h4>
                <h3 className={styles.graduationName}> High School </h3>
                <p className={styles.instituteName}> T.S.W.R.COE Algunoor (Kariminagar) </p>
              </div>

            </div>
          </div>
          <div className={styles.experienceContainer}>
            <h3 className={styles.tittle}> Experience </h3>
            <div className={styles.experienceContainerContent}>
              <div className={styles.experienceContainerCard}>
                <h4  className={styles.TimePeriod}>June(2023)- sept(2023)|FullTime </h4>
                <p className={styles.companyName}>Web Development @ Quanint TechSoft, Hyderabad</p>
                <a href="https://drive.google.com/file/d/1iUqP7VJk57yay5Gg3FCVBGhKy0Sx8AC_/view?usp=drive_link"> Certification </a>
              </div>

              <div className={styles.experienceContainerCard}>
                <h4  className={styles.TimePeriod}>Jan(2023)- sept(2023)|FullTime </h4>
                <p className={styles.companyName}>MERN Stack Web Development Course @ Cuvette </p>
                <a href="https://drive.google.com/file/d/1hTFkF-UdPY_tjqmAG1VC81XcdniQLzxA/view?usp=drive_link" > Certification </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
