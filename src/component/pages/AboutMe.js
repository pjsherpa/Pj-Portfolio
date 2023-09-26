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
            React front end developer experienced in building responsive and
            user-friendly web applications,with a background in Accounting. I
            have acquired comprehensive full-stack web development training and
            certification from UC Berkeley’s coding boot camp. I am passionate
            about creating apps and focused on designing and developing
            mobile-first applications. I excel in team environments and have the
            ability to see projects through from conception to completion.
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
