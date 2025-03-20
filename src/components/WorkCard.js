import React from "react";
import { FiGithub } from "react-icons/fi";

const WorkCard = ({ w }) => {
  return (
    <a
      href={w.gitlink} // Link to GitHub
      target="_blank"
      rel="noreferrer"
      className="work-link-group"
    >
      <div className="works-card">
        <div className="works-container">
          <div className="top-work">
            <FiGithub className="work-folder" /> {/* GitHub icon */}
          </div>
          <div className="mid-work">
            <p className="work-title">{w.title}</p>
            <p className="work-desc">{w.desc}</p>
          </div>
          <div className="bottom-work">
            {w.tech.map((e, index) => (
              <small key={index}>{e}</small>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default WorkCard;
