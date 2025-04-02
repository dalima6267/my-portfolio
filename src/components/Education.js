import React from "react";
import "../styles/Education.css";
import { FaUserGraduate } from "react-icons/fa";
import { motion } from "framer-motion";

const Education = () => {
  const fade = {
    opacity: 1,
    transition: {
      duration: 1.4,
    },
  };

  return (
    <>
      <div className="education" id="education">
        <div className="container">
          <motion.div
            whileInView={fade}
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            className="heading"
          >
            <p className="heading-sub-text">Academic</p>
            <p className="heading-text">Qualifications</p>
          </motion.div>
          <motion.div
            className="education-box"
            whileInView={fade}
            initial={{ opacity: 0 }}
          >
            <div className="education-card">
              <FaUserGraduate className="education-icon" />
              <p className="education-percent">S.P.I. 8.1</p>
              <p className="education-title">
                B.Tech in Computer Science and Engineering
              </p>
              <p className="education-desc">
                Government Engineering College , Raipur, Chhattisgarh{" "}
              </p>
              <p className="education-year">08/2021 - 05/2025</p>
            </div>
            <div className="education-card">
              <FaUserGraduate className="education-icon" />
              <p className="education-percent">92.80%</p>
              <p className="education-title">Senior Secondary Education </p>
              <p className="education-desc">
                Govt. Senior Secondary School , Balod, Chhattisgarh
              </p>
              <p className="education-year">04/2019 - 03/2020 </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Education;
