import React from "react";
import styles from "./Contact.module.css";
// import form from react-bootstrap
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
// import icons
import { AlignJustify, Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { MapPin } from "lucide-react";
import { MessageCircleCode } from "lucide-react";
import { Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className={styles.contactPage}>
      <div className={styles.contactHeader}>
        <h3>Contact me</h3>
        <p>Get in Touch</p>
      </div>
      <div className={styles.contactPageContainer}>
        <div className={styles.contactWays}>
          <ul className={styles.contactWaysList}>
            <li>
              <a href="tel:+919515751969" className={styles.ContactWaysLinkTag}> 
                <h4 className={styles.ContachPageIconText}> <Phone /> Call Me</h4>   
                <p>+91 9515751969</p>
              </a>
            </li>
            <li>
              <a href="mailto:keerthigone2002@gmail.com?subject=Mail from Portfolio Website"  target="blank" className={styles.ContactWaysLinkTag}>
                
                <h4 className={styles.ContachPageIconText}> <Mail /> Email</h4>
                <p>keerthigone2002@gmail.com</p>
              </a>
            </li>
            <li>
              <a href="" className={styles.ContactWaysLinkTag}>
               
                <h4 className={styles.ContachPageIconText}>  <MessageCircleCode /> Freelance</h4>
                <p>Available</p>
              </a>
            </li>
            <li>
              <a href="https://maps.app.goo.gl/iQGqqzTJoB9Cz4oY7" className={styles.ContactWaysLinkTag}>
                <h4 className={styles.ContachPageIconText}>  <MapPin /> Location</h4>
                <p>India, Telangana</p>
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.contactForm}>
          <FloatingLabel
            controlId="floatingPassword"
            label="Your Name"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Your Name" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingPassword"
            label="subject"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Password" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingPassword"
            label="Message"
            className="mb-3"
          >
            <Form.Control
              as="textarea"
              placeholder="Message"
              style={{ height: "120px", width: "250px" }}
            />
          </FloatingLabel>
          <button type="submit" className={styles.ContactFormSendBtn}>  <Send /> SEND</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
