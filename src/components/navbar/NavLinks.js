import React from "react";

import { FaLinkedin } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

const NavLinks = ({ handleNav }) => {
  return (
    <ul className="nav-links">
      <li onClick={handleNav}>
        <a
          href="https://www.linkedin.com/in/dalima-sahu"
          target="_blank"
          className="nav-link"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </li>
      <li onClick={handleNav}>
        <a
          href="https://github.com/dalima6267"
          target="_blank"
          className="nav-link"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </li>
      <li onClick={handleNav}>
        <a
          href="mailto:dalima62657@gmail.com"
          target="_blank"
          className="nav-link"
          rel="noreferrer"
        >
          <BiEnvelope />
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;
