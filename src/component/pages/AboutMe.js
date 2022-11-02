import React from "react";
import { FaGithubSquare, FaEnvelope } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";

const AboutMe = () => {
  return (
    <>
      <div>
        <h1>About Me</h1>
        <p>Growing a Passion in Coding.</p>
      </div>
      <div className="container">
        <div className="row justify-content-md-center">
          <h2 className="col col-lg-2">
            <a href="https://www.linkedin.com/in/pjsherpa/">
              <GrLinkedin color="black" />
            </a>
          </h2>
          <h2 className="col col-lg-2">
            <a href="mailto:phinjock@gmail.com">
              <FaEnvelope color="black" />
            </a>
          </h2>
          <h2 className="col col-lg-2">
            <a href="https://github.com/pjsherpa">
              <FaGithubSquare color="black" />
            </a>
          </h2>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
