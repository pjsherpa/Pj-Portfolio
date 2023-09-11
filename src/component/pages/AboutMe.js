import React from "react";
import Pjimg from "../../images/pj image.jpeg";
const AboutMe = () => {
  return (
    <>
      <div className="container ">
        <h1 className="d-flex justify-content-md-center text-center">
          About Me
        </h1>

        <div className="d-flex justify-content-md-center">
          <div className="col-lg-2 mb-2">
            <img className="my-pic" src={Pjimg} alt="Phinjock Sonam Sherpa" />
          </div>
        </div>
        <br></br>

        <h2 className="text-center">Greetings,</h2>
        <p>
          I'm Phinjock Sherpa (Pj), a UC Berkeley full-stack web development
          graduate, eager to join your team as a React Developer.
          <p>My background includes:</p>
          <ul>
            <li>Transitioning from an end-user role into web development.</li>
            <li>Strong fundamentals in web development from UC Berkeley.</li>
            <li>
              A commitment to ongoing learning and staying current with tech
              trends.
            </li>
            <li>Aspiring to become a Software Engineer.</li>
            <li>
              Possessing problem-solving skills and a collaborative mindset.
            </li>
            <li>An adventurous spirit with a love for travel.</li>
          </ul>
          Thank you for considering my portfolio. Let's discuss how I can
          contribute to your team's success.
        </p>

        <p>Best regards,</p>
        <p> Phinjock Sherpa (Pj)</p>
      </div>
    </>
  );
};

export default AboutMe;
