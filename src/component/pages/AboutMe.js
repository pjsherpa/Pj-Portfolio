import React from "react";
import Pjimg from "../../images/pj image.jpeg";
const AboutMe = () => {
  return (
    <>
      <div className="container ">
        <h1 className="d-flex justify-content-md-center">About Me</h1>

        <div className="d-flex justify-content-md-center">
          <div className="col-lg-2 mb-2">
            <img className="my-pic" src={Pjimg} alt="Phinjock Sonam Sherpa" />
          </div>
        </div>
        <br></br>

        <div className="text-center">
          <h2>Greetings,</h2>
          <p>
            My name is Phinjock Sherpa(Pj), and I graduated from UC Berkeley
            with a full-stack web development background. I aspire to become a
            Software Engineer and possess strong fundamentals in web
            development. My journey began by transitioning from an end-user
            role, and I'm committed to continuous learning and staying updated
            with tech trends. With problem-solvin~g skills, a collaborative
            mindset, and a love for travel, I'm eager to contribute to your
            team's success as a React Developer.
          </p>
          <p>Thank you for considering my portfolio.</p>

          <p>Best regards,</p>
          <p> Phinjock Sherpa (Pj)</p>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
