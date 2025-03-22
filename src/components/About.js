import React from "react";
import "../styles/About.css";
import { motion } from "framer-motion";
import ProfileImg from "../images/profile_me.jpg";

const About = () => {
  const horizontal = {
    x: 0,
    opacity: 1,
    transition: { type: "spring", duration: 2, bounce: 0.3 },
  };

  return (
    <>
      <div className="about" id="about">
        <div className="container">
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={horizontal}
            viewport={{ once: true }}
            className="heading"
          >
            <p className="heading-sub-text">Who I am</p>
            <p className="heading-text">About Me</p>
          </motion.div>
          <div className="split-about">
            <motion.div
              initial={{ x: "50", opacity: 0 }}
              whileInView={horizontal}
              className="about-img"
            >
              <img src={ProfileImg} alt="Profile" />
            </motion.div>
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              whileInView={horizontal}
              className="about-content"
            >
              <p>
                {" "}
                I am a final-year student passionate about programming,
                specializing in Android development with skills in Java, Kotlin,
                and Python. Additionally, I have experience with web
                technologies, including HTML, CSS, JavaScript, and React.{" "}
              </p>
              <br />
              <p>
                {" "}
                I thrive on challenges and continuously explore emerging
                technologies to deliver impactful solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
