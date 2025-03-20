import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

const NavLinks = ({ handleNav }) => {
  return (
    <ul className="nav-links">
      <li onClick={handleNav}>
        <Link
          to="https://www.linkedin.com/in/dalima-sahu"
          target="_blank"
          className="nav-link"
        >
          <FaLinkedin />
        </Link>
      </li>
      <li onClick={handleNav}>
        <Link
          to="https://github.com/dalima6267"
          target="_blank"
          className="nav-link"
        >
          <BsGithub />
        </Link>
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
