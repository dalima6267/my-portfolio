import React from "react";
import "../styles/Services.css";
import { CgWebsite } from "react-icons/cg";
import { FaMobileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Services = () => {
  const fade = {
    opacity: 1,
    transition: {
      duration: 1.4,
    },
  };

  return (
    <>
      <div className="services" id="services">
        <div className="container">
          <motion.div
            whileInView={fade}
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            className="heading"
          >
            <p className="heading-sub-text">What I can do</p>
            <p className="heading-text">Services</p>
          </motion.div>
          <motion.div
            className="services-box"
            whileInView={fade}
            initial={{ opacity: 0 }}
          >
            <div className="services-card">
              <FaMobileAlt className="services-icon" />
              <p className="services-title">App Development</p>
              <p className="services-desc">
                I use various app technologies to develop attractive,creative,
                interactive, responsive and functional apps.{" "}
              </p>
            </div>
            <div className="services-card">
              <CgWebsite className="services-icon" />
              <p className="services-title">Web Development</p>
              <p className="services-desc">
                I have web development skills in HTML, CSS, JavaScript, React,
                and Tailwind CSS, making you proficient in building modern,
                responsive, and interactive UIs.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Services;
